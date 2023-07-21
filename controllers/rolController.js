// controllers/rolController.js
const Rol = require('../models/rol');

const RolController = {
  getAll: async (req, res) => {
    try {
      const roles = await Rol.getAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener roles' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const rol = await Rol.getById(id);
      if (rol) {
        res.json(rol);
      } else {
        res.status(404).json({ error: 'Rol no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el rol' });
    }
  },

  add: async (req, res) => {
    const rolData = req.body;
    try {
      const rolId = await Rol.add(rolData);
      res.json({ id: rolId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar rol' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const rolData = req.body;
    try {
      const updated = await Rol.update(id, rolData);
      if (updated) {
        res.json({ message: 'Rol actualizado correctamente' });
      } else {
        res.status(404).json({ error: 'Rol no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar rol' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await Rol.delete(id);
      if (deleted) {
        res.json({ message: 'Rol eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Rol no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar rol' });
    }
  },



};

module.exports = RolController;
