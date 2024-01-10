const express = require('express');
const router = express.Router();
const statController = require('../controllers/stat');

router.get('/basic', statController.getCharacterBasic)
router.get('/total', statController.getCharacterStat)
router.get('/hyper', statController.getCharacterHyperStat)
router.get('/ability', statController.getCharacterAbility)
module.exports = router;