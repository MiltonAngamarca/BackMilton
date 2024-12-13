const connectDB = require('./config/db');
require('dotenv').config(); 

const testConnection = async () => {
  try {
    await connectDB();
    console.log('La conexión a MongoDB Atlas fue exitosa.');
    process.exit(0); 
  } catch (err) {
    console.error('Error al probar la conexión:', err.message);
    process.exit(1); 
  }
};

testConnection();
