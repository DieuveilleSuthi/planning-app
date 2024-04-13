const express = require('express');
const userController = require('../../controllers/userController/userController');

const router = express.Router();

router.route('/').post(userController.createUser);

module.exports = router;