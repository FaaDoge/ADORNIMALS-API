// models/producto.js
const db = require('../config/db');

const Producto = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM producto');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM producto WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (productoData) => {
    const { nombre, descripcion, imagen, calificacion, precioproveedor, comision, idtipo } = productoData;
    try {
      const [result, _] = await db.query('INSERT INTO producto (nombre, descripcion, imagen, calificacion, precioproveedor, comision, idtipo) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombre, descripcion, imagen, calificacion, precioproveedor, comision, idtipo]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, productoData) => {
    const { nombre, descripcion, imagen, calificacion, precioproveedor, comision, idtipo } = productoData;
    try {
      const [result, _] = await db.query('UPDATE producto SET nombre = ?, descripcion = ?, imagen = ?, calificacion = ?, precioproveedor = ?, comision = ?, idtipo = ? WHERE id = ?', [nombre, descripcion, imagen, calificacion, precioproveedor, comision, idtipo, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM producto WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  search: async (query) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM producto WHERE nombre LIKE ?', [`%${query}%`]);
      return rows;
    } catch (error) {
      throw error;
    }
  },



};

module.exports = Producto;
