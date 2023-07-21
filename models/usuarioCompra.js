// models/usuarioCompra.js
const db = require('../config/db');

const UsuarioCompra = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM usuario_compra');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM usuario_compra WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (usuarioCompraData) => {
    const { idusuario, idcompra } = usuarioCompraData;
    try {
      const [result, _] = await db.query('INSERT INTO usuario_compra (idusuario, idcompra) VALUES (?, ?)', [idusuario, idcompra]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, usuarioCompraData) => {
    const { idusuario, idcompra } = usuarioCompraData;
    try {
      const [result, _] = await db.query('UPDATE usuario_compra SET idusuario = ?, idcompra = ? WHERE id = ?', [idusuario, idcompra, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM usuario_compra WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  // Implementa otras funciones para manejar las operaciones CRUD
  // ...

};

module.exports = UsuarioCompra;
