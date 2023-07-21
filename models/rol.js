// models/rol.js
const db = require('../config/db');

const Rol = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM rol');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM rol WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (rolData) => {
    const { nombre } = rolData;
    try {
      const [result, _] = await db.query('INSERT INTO rol (nombre) VALUES (?)', [nombre]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, rolData) => {
    const { nombre } = rolData;
    try {
      const [result, _] = await db.query('UPDATE rol SET nombre = ? WHERE id = ?', [nombre, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM rol WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },


};

module.exports = Rol;
