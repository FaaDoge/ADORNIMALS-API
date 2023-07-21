// models/rolUsuario.js
const db = require('../config/db');

const RolUsuario = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM rol_usuario');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM rol_usuario WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (rolUsuarioData) => {
    const { idrol, idusuario } = rolUsuarioData;
    try {
      const [result, _] = await db.query('INSERT INTO rol_usuario (idrol, idusuario) VALUES (?, ?)', [idrol, idusuario]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, rolUsuarioData) => {
    const { idrol, idusuario } = rolUsuarioData;
    try {
      const [result, _] = await db.query('UPDATE rol_usuario SET idrol = ?, idusuario = ? WHERE id = ?', [idrol, idusuario, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM rol_usuario WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },



};

module.exports = RolUsuario;
