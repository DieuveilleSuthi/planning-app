
const express = require('express');
const planningRoutes = require('./routes/planningRoutes/planningRoutes');
const userRoutes = require('./routes/userRoutes/userRoutes');

const app = express();

//body parser
app.use(express.json({limit: '10kb'}));

//Routes
app.use('/api/v1/planning', planningRoutes);
app.use('/api/v1/user', userRoutes);

module.exports = app;