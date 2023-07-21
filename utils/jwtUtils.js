// utils/jwtUtils.js
const jwt = require('jsonwebtoken');

const secretKey = 'UwU'; // Cambia esto en producción

function generarToken(usuario) {
  const payload = {
    user: usuario,
  };

  const options = {
    expiresIn: '1h', // Tiempo de expiración del token, puedes ajustarlo según tus necesidades
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
}

async function verificarToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.user;
  } catch (error) {
    console.error('Error al verificar el token JWT:', error);
    throw error;
  }
}

module.exports = {
  generarToken,
  verificarToken,
};
