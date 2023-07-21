// models/tipo.js
const db = require('../config/db');

const Tipo = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM tipo');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM tipo WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (tipoData) => {
    const { nombre } = tipoData;
    try {
      const [result, _] = await db.query('INSERT INTO tipo (nombre) VALUES (?)', [nombre]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, tipoData) => {
    const { nombre } = tipoData;
    try {
      const [result, _] = await db.query('UPDATE tipo SET nombre = ? WHERE id = ?', [nombre, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM tipo WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },


};

module.exports = Tipo;
