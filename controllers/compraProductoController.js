// controllers/compraProductoController.js
const CompraProducto = require('../models/compraProducto');

const CompraProductoController = {
  getAll: async (req, res) => {
    try {
      const comprasProductos = await CompraProducto.getAll();
      res.json(comprasProductos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener compras productos' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const compraProducto = await CompraProducto.getById(id);
      if (compraProducto) {
        res.json(compraProducto);
      } else {
        res.status(404).json({ error: 'Compra producto no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el compra producto' });
    }
  },

  add: async (req, res) => {
    const compraProductoData = req.body;
    try {
      const compraProductoId = await CompraProducto.add(compraProductoData);
      res.json({ id: compraProductoId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar compra producto' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const compraProductoData = req.body;
    try {
      const updated = await CompraProducto.update(id, compraProductoData);
      if (updated) {
        res.json({ message: 'Compra producto actualizado correctamente' });
      } else {
        res.status(404).json({ error: 'Compra producto no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar compra producto' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await CompraProducto.delete(id);
      if (deleted) {
        res.json({ message: 'Compra producto eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Compra producto no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar compra producto' });
    }
  },



};

module.exports = CompraProductoController;
