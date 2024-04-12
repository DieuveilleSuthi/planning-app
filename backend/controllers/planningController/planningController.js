const Planning = require('../../models/planningModel/planningModel');

exports.createPlanning = async (req, res, next) => {
    try {
        // Utilisation de await pour attendre la création de la planification
        const newPlanning = await Planning.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                planning: newPlanning
            }
        });
    } catch (error) {
        // Gestion des erreurs
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};
