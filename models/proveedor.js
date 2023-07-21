// models/proveedor.js
const db = require('../config/db');

const Proveedor = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM proveedor');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM proveedor WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (proveedorData) => {
    const { nombre, direccion, telefono, correo } = proveedorData;
    try {
      const [result, _] = await db.query('INSERT INTO proveedor (nombre, direccion, telefono, correo) VALUES (?, ?, ?, ?)', [nombre, direccion, telefono, correo]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, proveedorData) => {
    const { nombre, direccion, telefono, correo } = proveedorData;
    try {
      const [result, _] = await db.query('UPDATE proveedor SET nombre = ?, direccion = ?, telefono = ?, correo = ? WHERE id = ?', [nombre, direccion, telefono, correo, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM proveedor WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },


};

module.exports = Proveedor;
