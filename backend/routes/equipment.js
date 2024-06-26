const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipment');

router.get('/wear', equipmentController.getCharacterEquipment)
router.get('/cash/wear', equipmentController.getCharacterCashEquipment)
module.exports = router;