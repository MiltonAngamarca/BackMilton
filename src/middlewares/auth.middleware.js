const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res
      .status(401)
      .json({ error: 'Acceso denegado. No se proporcionó un token.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido o expirado.' });
  }
};

exports.authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({
          error: 'Acceso denegado. No tienes permisos para esta acción.',
        });
    }
    next();
  };
};
