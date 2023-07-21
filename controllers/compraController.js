// controllers/compraController.js
const Compra = require('../models/compra');

const CompraController = {
  getAll: async (req, res) => {
    try {
      const compras = await Compra.getAll();
      res.json(compras);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener compras' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const compra = await Compra.getById(id);
      if (compra) {
        res.json(compra);
      } else {
        res.status(404).json({ error: 'Compra no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la compra' });
    }
  },

  add: async (req, res) => {
    const compraData = req.body;
    try {
      const compraId = await Compra.add(compraData);
      res.json({ id: compraId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar compra' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const compraData = req.body;
    try {
      const updated = await Compra.update(id, compraData);
      if (updated) {
        res.json({ message: 'Compra actualizada correctamente' });
      } else {
        res.status(404).json({ error: 'Compra no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar compra' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await Compra.delete(id);
      if (deleted) {
        res.json({ message: 'Compra eliminada correctamente' });
      } else {
        res.status(404).json({ error: 'Compra no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar compra' });
    }
  },


};

module.exports = CompraController;
