// models/compra.js
const db = require('../config/db');

const Compra = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM compra');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM compra WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (compraData) => {
    const { fecha } = compraData;
    try {
      const [result, _] = await db.query('INSERT INTO compra (fecha) VALUES (?)', [fecha]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, compraData) => {
    const { fecha } = compraData;
    try {
      const [result, _] = await db.query('UPDATE compra SET fecha = ? WHERE id = ?', [fecha, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM compra WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },



};

module.exports = Compra;
