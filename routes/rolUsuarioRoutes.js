// routes/rolUsuarioRoutes.js
const express = require('express');
const router = express.Router();
const RolUsuarioController = require('../controllers/rolUsuarioController');
const authMiddleware = require('../utils/authMiddleware');

// Ruta para obtener todos los roles usuarios
router.get('/roles-usuarios', RolUsuarioController.getAll);

// Ruta para obtener un rol usuario por su ID
router.get('/roles-usuarios/:id', RolUsuarioController.getById);

// Ruta para agregar un rol usuario
router.post('/roles-usuarios', RolUsuarioController.add);

// Ruta para actualizar un rol usuario por su ID
router.put('/roles-usuarios/:id', RolUsuarioController.update);

// Ruta para eliminar un rol usuario por su ID
router.delete('/roles-usuarios/:id', RolUsuarioController.delete);



module.exports = router;
