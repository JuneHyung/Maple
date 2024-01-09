const express = require('express');
const router = express.Router();
const statController = require('../controllers/stat');

router.get('/basic', statController.getCharacterStat)
module.exports = router;