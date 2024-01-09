const express = require('express');
const router = express.Router();
const unionController = require('../controllers/union');

router.get('/basic', unionController.getCharacterUnion)
router.get('/raider', unionController.getCharacterUnionRaider)
module.exports = router;