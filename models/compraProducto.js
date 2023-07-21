// models/compraProducto.js
const db = require('../config/db');

const CompraProducto = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM compra_producto');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM compra_producto WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (compraProductoData) => {
    const { precio, idproducto, idcompra } = compraProductoData;
    try {
      const [result, _] = await db.query('INSERT INTO compra_producto (precio, idproducto, idcompra) VALUES (?, ?, ?)', [precio, idproducto, idcompra]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, compraProductoData) => {
    const { precio, idproducto, idcompra } = compraProductoData;
    try {
      const [result, _] = await db.query('UPDATE compra_producto SET precio = ?, idproducto = ?, idcompra = ? WHERE id = ?', [precio, idproducto, idcompra, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM compra_producto WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },


};

module.exports = CompraProducto;
