// controllers/tipoController.js
const Tipo = require('../models/tipo');

const TipoController = {
  getAll: async (req, res) => {
    try {
      const tipos = await Tipo.getAll();
      res.json(tipos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener tipos' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const tipo = await Tipo.getById(id);
      if (tipo) {
        res.json(tipo);
      } else {
        res.status(404).json({ error: 'Tipo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el tipo' });
    }
  },

  add: async (req, res) => {
    const tipoData = req.body;
    try {
      const tipoId = await Tipo.add(tipoData);
      res.json({ id: tipoId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar tipo' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const tipoData = req.body;
    try {
      const updated = await Tipo.update(id, tipoData);
      if (updated) {
        res.json({ message: 'Tipo actualizado correctamente' });
      } else {
        res.status(404).json({ error: 'Tipo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar tipo' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await Tipo.delete(id);
      if (deleted) {
        res.json({ message: 'Tipo eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Tipo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar tipo' });
    }
  },



};

module.exports = TipoController;
