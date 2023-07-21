// routes/rolRoutes.js
const express = require('express');
const router = express.Router();
const RolController = require('../controllers/rolController');
const authMiddleware = require('../utils/authMiddleware');
const { validateAddRol, handleValidationErrors } = require('../middlewares/validationMiddleware');
// Ruta para obtener todos los roles
router.get('/roles', RolController.getAll);

// Ruta para obtener un rol por su ID
router.get('/roles/:id', RolController.getById);

// Ruta para agregar un rol
router.post('/roles',validateAddRol, handleValidationErrors, RolController.add);

// Ruta para actualizar un rol por su ID
router.put('/roles/:id', RolController.update);

// Ruta para eliminar un rol por su ID
router.delete('/roles/:id', RolController.delete);



module.exports = router;
