// models/persona.js
const db = require('../config/db');

const Persona = {
  getAll: async () => {
    try {
      const [rows, _] = await db.query('SELECT * FROM persona');
      return rows;
    } catch (error) {
      //console.error('Error al obtener personas:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const [rows, _] = await db.query('SELECT * FROM persona WHERE id = ?', [id]);
      return rows.length ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  },

  add: async (personaData) => {
    const { ci, nombre, apellido, correo,usuario_id } = personaData;
    try {
      const [result, _] = await db.query('INSERT INTO persona (ci, nombre, apellido, correo, usuario_id) VALUES (?, ?, ?, ?,?)', [ci, nombre, apellido, correo,usuario_id]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, personaData) => {
    const { ci, nombre, apellido, correo,usuario_id } = personaData;
    try {
      const [result, _] = await db.query('UPDATE persona SET ci = ?, nombre = ?, apellido = ?, correo = ?, usuario_id = ? WHERE id = ?', [ci, nombre, apellido, correo,usuario_id, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result, _] = await db.query('DELETE FROM persona WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  },



};

module.exports = Persona;
