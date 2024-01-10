const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skill');

router.get('/link', skillController.getCharacterLinkSkill)

module.exports = router;