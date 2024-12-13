
exports.errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor',
  });
};

exports.notFoundHandler = (req, res, next) => {
  res.status(404).json({ error: 'Recurso no encontrado.' });
};
