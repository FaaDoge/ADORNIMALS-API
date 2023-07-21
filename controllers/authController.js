// controllers/authController.js
const { generarToken } = require('../utils/jwtUtils');
const usuariosModel = require('../models/usuario.js');

async function login(req, res) {
  const { nombreUsuario, password } = req.body;

  try {
    // Obtener todos los usuarios de la base de datos
    const usuarios = await usuariosModel.obtenerUsuarios();

    // Buscar el usuario por nombre de usuario en la lista de usuarios
    const usuario = usuarios.find((user) => user.nombreUsuario === nombreUsuario);

    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    // Generar un token para el usuario autenticado
    const token = generarToken(usuario);

    // Enviar el token en la respuesta
    res.json({ token });
  } catch (error) {
    console.error('Error al realizar la autenticación:', error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
}

module.exports = {
  login,
};
