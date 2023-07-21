// controllers/productoController.js
const Producto = require('../models/producto');

const ProductoController = {
  getAll: async (req, res) => {
    try {
      const productos = await Producto.getAll();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const producto = await Producto.getById(id);
      if (producto) {
        res.json(producto);
      } else {
        res.status(404).json({ error: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el producto' });
    }
  },

  add: async (req, res) => {
    const productoData = req.body;
    try {
      const productoId = await Producto.add(productoData);
      res.json({ id: productoId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar producto' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const productoData = req.body;
    try {
      const updated = await Producto.update(id, productoData);
      if (updated) {
        res.json({ message: 'Producto actualizado correctamente' });
      } else {
        res.status(404).json({ error: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar producto' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await Producto.delete(id);
      if (deleted) {
        res.json({ message: 'Producto eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar producto' });
    }
  },

  search: async (req, res) => {
    const query = req.query.q;
    try {
      const productos = await Producto.search(query);
      res.json(productos);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar productos' });
    }
  },


};

module.exports = ProductoController;
