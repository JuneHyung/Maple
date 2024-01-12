const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skill');

router.get('/link', skillController.getCharacterLinkSkill)
router.get('/class', skillController.getCharacterClassSkill)
router.get('/hexa/stat', skillController.getCharacterHexaStat)

module.exports = router;