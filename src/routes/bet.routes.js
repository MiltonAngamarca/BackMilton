const express = require('express');
const router = express.Router();
const { createBet, getUserBets } = require('../controllers/betController');
const { authenticate } = require('../middlewares/auth.middleware'); 

router.post('/', authenticate, createBet);

router.get('/', authenticate, getUserBets);

module.exports = router;
