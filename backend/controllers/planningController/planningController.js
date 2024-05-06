const Planning = require('../../models/planningModel/planningModel');

exports.createPlanning = async (req, res, next) => {
    try {
        const newPlanning = await Planning.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                planning: newPlanning
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

exports.getAllPlanning = async (req, res, next) => {
    try {
        const plannings = await Planning.find(req.query);

        res.status(200).json({
            status: 'success',
            results: plannings.length,
            data: {
                plannings
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

exports.getPlanningById = async (req, res, next) => {
    try {
        const planning = await Planning.findById(req.params.id);
        if (!planning) {
            return res.status(404).json({
                status: 'fail',
                message: 'Planning not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                planning
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

exports.updatePlanning = async (req, res, next) => {
    try {
        const planningId = req.params.id;
        const updatedPlanning = await Planning.findByIdAndUpdate(planningId, req.body, { new: true });
        if (!updatedPlanning) {
            return res.status(404).json({
                status: 'fail',
                message: 'Planning not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                planning: updatedPlanning
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};
