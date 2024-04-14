const express = require('express');
const planningController = require('../../controllers/planningController/planningController')
const userController = require('../../controllers/userController/userController')

const router = express.Router();

router.route('/').post(userController.authenticate, planningController.createPlanning).get(userController.authenticate, planningController.getAllPlanning);

module.exports = router;