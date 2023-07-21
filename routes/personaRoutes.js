const express = require('express');
const router = express.Router();
const PersonaController = require('../controllers/personaController.js');
//const authMiddleware = require('../utils/authMiddleware');
/*
// Rutas protegidas con autenticación
router.get('/personas', authMiddleware, PersonaController.getAll);
router.post('/personas', authMiddleware, PersonaController.add);
router.put('/personas/:id', authMiddleware, PersonaController.update);
router.delete('/personas/:id', authMiddleware, PersonaController.delete);
// Otras rutas no protegidas
router.get('/personas/:id', PersonaController.getById);
*/
const { validateAddPersona, validateUpdatePersona, handleValidationErrors } = require('../middlewares/validationMiddleware');

// Rutas
router.get('/personas', PersonaController.getAll);
router.post('/personas', validateAddPersona, handleValidationErrors, PersonaController.add);
router.put('/personas/:id', validateUpdatePersona, handleValidationErrors, PersonaController.update);
router.delete('/personas/:id', PersonaController.delete);
router.get('/personas/:id', PersonaController.getById);

module.exports = router;
// routes/personaRoutes.js
