// controllers/usuarioController.js
const Usuario = require('../models/usuario');

const UsuarioController = {
  getAll: async (req, res) => {
    try {
      const usuarios = await Usuario.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const usuario = await Usuario.getById(id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  },

  add: async (req, res) => {
    const usuarioData = req.body;
    try {
      const usuarioId = await Usuario.add(usuarioData);
      res.json({ id: usuarioId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar usuario' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const usuarioData = req.body;
    try {
      const updated = await Usuario.update(id, usuarioData);
      if (updated) {
        res.json({ message: 'Usuario actualizado correctamente' });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await Usuario.delete(id);
      if (deleted) {
        res.json({ message: 'Usuario eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  },


};

module.exports = UsuarioController;
