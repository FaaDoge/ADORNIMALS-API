// models/usuario.js
const db = require('../config/db');

const Usuario = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM usuario');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM usuario WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (usuarioData) => {
    const { nombre_usuario, password, imagen } = usuarioData;
    try {
      const [result, _] = await db.query('INSERT INTO usuario (nombre_usuario, password, imagen) VALUES (?, ?, ?)', [nombre_usuario, password, imagen]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, usuarioData) => {
    const { nombre_usuario, password, imagen } = usuarioData;
    try {
      const [result, _] = await db.query('UPDATE usuario SET nombre_usuario = ?, password = ?, imagen = ? WHERE id = ?', [nombre_usuario, password, imagen, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM usuario WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },


};

module.exports = Usuario;
