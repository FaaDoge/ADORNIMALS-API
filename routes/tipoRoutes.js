// routes/tipoRoutes.js
const express = require('express');
const router = express.Router();
const TipoController = require('../controllers/tipoController');
const authMiddleware = require('../utils/authMiddleware');
const { validateAddTipo, handleValidationErrors } = require('../middlewares/validationMiddleware');
// Ruta para obtener todos los tipos
router.get('/tipos', TipoController.getAll);

// Ruta para obtener un tipo por su ID
router.get('/tipos/:id', TipoController.getById);

// Ruta para agregar un tipo
router.post('/tipos',validateAddTipo, handleValidationErrors, TipoController.add);

// Ruta para actualizar un tipo por su ID
router.put('/tipos/:id', TipoController.update);

// Ruta para eliminar un tipo por su ID
router.delete('/tipos/:id', TipoController.delete);



module.exports = router;
