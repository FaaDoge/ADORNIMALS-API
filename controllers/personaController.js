// controllers/personaController.js
const Persona = require('../models/persona');
const { validationResult } = require('express-validator');

const PersonaController = {
  getAll: async (req, res) => {
    try {
      const personas = await Persona.getAll();
      res.json(personas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener personas' });
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const persona = await Persona.getById(id);
      if (persona) {
        res.json(persona);
      } else {
        res.status(404).json({ error: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la persona' });
    }
  },

  add: async (req, res) => {
    // Validar los datos utilizando las funciones de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const personaData = req.body;
    try {
      const personaId = await Persona.add(personaData);
      res.json({ id: personaId });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar persona' });
    }
  },

  update: async (req, res) => {
    // Validar los datos utilizando las funciones de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id;
    const personaData = req.body;
    try {
      const updated = await Persona.update(id, personaData);
      if (updated) {
        res.json({ message: 'Persona actualizada correctamente' });
      } else {
        res.status(404).json({ error: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar persona' });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await Persona.delete(id);
      if (deleted) {
        res.json({ message: 'Persona eliminada correctamente' });
      } else {
        res.status(404).json({ error: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar persona' });
    }
  },


};

module.exports = PersonaController;
