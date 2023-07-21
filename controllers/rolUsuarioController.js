// controllers/rolUsuarioController.js
const RolUsuario = require('../models/rolUsuario');

const RolUsuarioController = {
  getAll: async (req, res) => {
    try {
      const rolesUsuarios = await RolUsuario.getAll();
      res.json(rolesUsuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener roles usuarios' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const rolUsuario = await RolUsuario.getById(id);
      if (rolUsuario) {
        res.json(rolUsuario);
      } else {
        res.status(404).json({ error: 'Rol usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el rol usuario' });
    }
  },

  add: async (req, res) => {
    const rolUsuarioData = req.body;
    try {
      const rolUsuarioId = await RolUsuario.add(rolUsuarioData);
      res.json({ id: rolUsuarioId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar rol usuario' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const rolUsuarioData = req.body;
    try {
      const updated = await RolUsuario.update(id, rolUsuarioData);
      if (updated) {
        res.json({ message: 'Rol usuario actualizado correctamente' });
      } else {
        res.status(404).json({ error: 'Rol usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar rol usuario' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await RolUsuario.delete(id);
      if (deleted) {
        res.json({ message: 'Rol usuario eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Rol usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar rol usuario' });
    }
  },


};

module.exports = RolUsuarioController;
