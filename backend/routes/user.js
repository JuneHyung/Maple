const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/ocid', userController.getCharacterOCID)
module.exports = router;