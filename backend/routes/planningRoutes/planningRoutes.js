const express = require('express');
const planningController = require('../../controllers/planningController/planningController')

const router = express.Router();

router.route('/').post(planningController.createPlanning).get(planningController.getAllPlanning);

module.exports = router;