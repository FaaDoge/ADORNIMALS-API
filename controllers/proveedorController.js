// controllers/proveedorController.js
const Proveedor = require('../models/proveedor');

const ProveedorController = {
  getAll: async (req, res) => {
    try {
      const proveedores = await Proveedor.getAll();
      res.json(proveedores);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener proveedores' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const proveedor = await Proveedor.getById(id);
      if (proveedor) {
        res.json(proveedor);
      } else {
        res.status(404).json({ error: 'Proveedor no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el proveedor' });
    }
  },

  add: async (req, res) => {
    const proveedorData = req.body;
    try {
      const proveedorId = await Proveedor.add(proveedorData);
      res.json({ id: proveedorId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar proveedor' });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const proveedorData = req.body;
    try {
      const updated = await Proveedor.update(id, proveedorData);
      if (updated) {
        res.json({ message: 'Proveedor actualizado correctamente' });
      } else {
        res.status(404).json({ error: 'Proveedor no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar proveedor' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await Proveedor.delete(id);
      if (deleted) {
        res.json({ message: 'Proveedor eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Proveedor no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar proveedor' });
    }
  },



};

module.exports = ProveedorController;
