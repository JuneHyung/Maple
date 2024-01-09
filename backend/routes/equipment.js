const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipment');

router.get('/weaer', equipmentController.getCharacterEquipment)
module.exports = router;