// controllers/usuarioCompraController.js
const UsuarioCompra = require('../models/usuarioCompra');

const UsuarioCompraController = {
  getAll: async (req, res) => {
    try {
      const usuarioCompras = await UsuarioCompra.getAll();
      res.json(usuarioCompras);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuarios compras' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const usuarioCompra = await UsuarioCompra.getById(id);
      if (usuarioCompra) {
        res.json(usuarioCompra);
      } else {
        res.status(404).json({ error: 'Usuario compra no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario compra' });
    }
  },

  add: async (req, res) => {
    const usuarioCompraData = req.body;
    try {
      const usuarioCompraId = await UsuarioCompra.add(usuarioCompraData);
      res.json({ id: usuarioCompraId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar usuario compra' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const usuarioCompraData = req.body;
    try {
      const updated = await UsuarioCompra.update(id, usuarioCompraData);
      if (updated) {
        res.json({ message: 'Usuario compra actualizada correctamente' });
      } else {
        res.status(404).json({ error: 'Usuario compra no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar usuario compra' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await UsuarioCompra.delete(id);
      if (deleted) {
        res.json({ message: 'Usuario compra eliminada correctamente' });
      } else {
        res.status(404).json({ error: 'Usuario compra no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar usuario compra' });
    }
  },



};

module.exports = UsuarioCompraController;
