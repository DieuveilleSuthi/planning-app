import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DatePickerInput, TimePickerModal, registerTranslation } from 'react-native-paper-dates';
import styles from './CreatePlanningScreenCss';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Register 'fr' locale settings
registerTranslation('fr', {
  save: 'Save',
  selectSingle: 'Select date',
  selectMultiple: 'Select dates',
  selectRange: 'Select period',
  notAccordingToDateFormat: (inputFormat) => `Date format must be ${inputFormat}`,
  mustBeHigherThan: (date) => `Must be later than ${date}`,
  mustBeLowerThan: (date) => `Must be earlier than ${date}`,
  mustBeBetween: (startDate, endDate) => `Must be between ${startDate} and ${endDate}`,
  dateIsDisabled: 'Day is not allowed',
  previous: 'Previous',
  next: 'Next',
  typeInDate: 'Type in date',
  pickDateFromCalendar: 'Pick date from calendar',
  close: 'Close',
});

const CreatePlanningScreen = () => {
  const navigation = useNavigation();
  const [activities, setActivities] = useState([{ id: 1, date: new Date(), time: '', title: '', description: '' }]);
  const [inputDate, setInputDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [currentPickerTime, setCurrentPickerTime] = useState({ hours: 12, minutes: 14 });


  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch('http://10.188.120.127:3000/api/v1/planning', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(activities),
      });

      if (response.ok) {
        // Affichez un message de succès ou effectuez une action appropriée
        console.log('Data successfully sent to the database');
        navigation.navigate('Program', { activities });

      } else {
        // Gérez les erreurs en cas de problème avec la requête
        console.error('Failed to send data to the database');
      }
    } catch (error) {
      // Gérez les erreurs en cas de problème avec la requête
      console.error('Error:', error);
    }
  };

  const onDismiss = useCallback(() => {
    setVisible(false);
  }, []);

  const onConfirm = useCallback(({ hours, minutes }) => {
    setVisible(false);
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    // Update time for the selected activity
    setActivities((currentActivities) =>
      currentActivities.map((activity) => {
        if (activity.id === selectedActivityId) {
          return { ...activity, time: formattedTime };
        }
        return activity;
      })
    );
  }, [selectedActivityId]);

  const handleAddActivity = useCallback(() => {
    const newActivityId = activities.length + 1;
    setActivities([...activities, { id: newActivityId, time: '', title: '', description: '' }]);
  }, [activities]);

  const openTimePicker = useCallback((activityId) => {
    setSelectedActivityId(activityId);
    const selectedActivity = activities.find(activity => activity.id === activityId);
    if (selectedActivity && selectedActivity.time) {
      const [hours, minutes] = selectedActivity.time.split(':').map(Number);
      setCurrentPickerTime({ hours, minutes });
    }
    setVisible(true);
  }, [activities]);

  const updateActivityField = useCallback((activityId, field, value) => {
    setActivities((currentActivities) =>
      currentActivities.map((activity) => {
        if (activity.id === activityId) {
          return { ...activity, [field]: value };
        }
        return activity;
      })
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.textItem}>Create Your Planning</Text>
      </View>
      {activities.map((activity) => (
        <View key={activity.id}>
          <View style={styles.textActivityContent}>
            <Text style={styles.textActivityItem}>Activity {activity.id}</Text>
          </View>
          <View style={styles.DetailContentDate}>
            <Text style={styles.DetailItem}> Date:</Text>
            <DatePickerInput
                locale="fr"
                label="Click and choose your date"
                value={activity.date}
                onChange={(d) => updateActivityField(activity.id, 'date', d)}
                inputMode="start"
                style={styles.textInputDate}
            />
          </View>
          <View style={styles.DetailContent}>
            <Text style={styles.DetailItem}> Time:</Text>
            <TouchableOpacity onPress={() => openTimePicker(activity.id)} style={styles.textInput}>
              <Text style={{color: 'white'}}>{activity.time}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.DetailContent}>
            <Text style={styles.DetailItem}> Activity Title:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => updateActivityField(activity.id, 'title', text)}
              value={activity.title}
            />
          </View>
          <View style={styles.DetailContent}>
            <Text style={styles.DetailItem}> Description:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => updateActivityField(activity.id, 'description', text)}
              value={activity.description}
            />
          </View>
        </View>
      ))}
      <View style={styles.btnContainer}>
        <Pressable style={styles.btnCreate} onPress={handleAddActivity}>
          <Text> Add New Activity </Text>
        </Pressable>
        <Pressable style={styles.btnCreate} onPress={handleSubmit}>
          <Text> Create </Text>
        </Pressable>
      </View>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={currentPickerTime.hours}
        minutes={currentPickerTime.minutes}
        label="Choose Time"
      />
    </ScrollView>
  );
};

export default CreatePlanningScreen;
