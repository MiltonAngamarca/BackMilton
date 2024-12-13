const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const {
  errorHandler,
  notFoundHandler,
} = require('./middlewares/error.midleware');
require('dotenv').config();

const app = express();
connectDB();

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));
// Nuevas rutas de apuestas
app.use('/api/bets', require('./routes/bet.routes'));

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
