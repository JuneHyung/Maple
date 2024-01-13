const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/ocid', userController.getCharacterOCID)
router.get('/rank', userController.getCharacterRankOverall)
module.exports = router;