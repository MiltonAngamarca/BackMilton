const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getPrematchHighlights } = require('../services/sportEvents.service');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    const sportEvents = await getPrematchHighlights();
    res
      .status(201)
      .json({ message: 'Usuario registrado con éxito', sportEvents });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    const sportEvents = await getPrematchHighlights();
    res.json({ token, sportEvents });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
