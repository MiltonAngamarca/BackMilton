// src/controllers/betController.js

const Bet = require('../models/bet');
const User = require('../models/user.model'); 

// Crear una nueva apuesta
exports.createBet = async (req, res) => {
  try {
    const { eventId, amount, selectedResult } = req.body;
    const userId = req.user.id; 

    if (!eventId || !amount || !selectedResult) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son requeridos.' });
    }

    if (!['1', 'X', '2'].includes(selectedResult)) {
      return res
        .status(400)
        .json({ message: 'Resultado seleccionado inválido.' });
    }

    if (amount < 1) {
      return res
        .status(400)
        .json({ message: 'El monto de la apuesta debe ser al menos 1.' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado.' });
    }

    if (user.balance < amount) {
      return res
        .status(400)
        .json({ message: 'Saldo insuficiente para realizar la apuesta.' });
    }

    const newBet = new Bet({
      userId,
      eventId,
      amount,
      selectedResult,
    });

    const savedBet = await newBet.save();

    user.balance -= amount;
    await user.save();

    res.status(201).json(savedBet);
  } catch (error) {
    console.error('Error al crear la apuesta:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

exports.getUserBets = async (req, res) => {
  try {
    const userId = req.user.id;
    const bets = await Bet.find({ userId });
    res.status(200).json(bets);
  } catch (error) {
    console.error('Error al obtener las apuestas:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};
