// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../utils/authMiddleware');
const { validateAddUsuario,validateUpdateUsuario, handleValidationErrors } = require('../middlewares/validationMiddleware');
// Ruta para obtener todos los usuarios
router.get('/usuarios', UsuarioController.getAll);

// Ruta para obtener un usuario por su ID
router.get('/usuarios/:id', UsuarioController.getById);

// Ruta para agregar un usuario
router.post('/usuarios',validateAddUsuario,handleValidationErrors, UsuarioController.add);

// Ruta para actualizar un usuario por su ID
router.put('/usuarios/:id',validateUpdateUsuario, handleValidationErrors,UsuarioController.update);

// Ruta para eliminar un usuario por su ID
router.delete('/usuarios/:id', UsuarioController.delete);


module.exports = router;
