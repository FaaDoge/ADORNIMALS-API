// routes/proveedorRoutes.js
const express = require('express');
const router = express.Router();
const ProveedorController = require('../controllers/proveedorController');
const authMiddleware = require('../utils/authMiddleware');
const { validateAddProveedor,validateUpdateProveedor, handleValidationErrors } = require('../middlewares/validationMiddleware');
// Ruta para obtener todos los proveedores
router.get('/proveedores', ProveedorController.getAll);
// Ruta para obtener un proveedor por su ID
router.get('/proveedores/:id', ProveedorController.getById);
// Ruta para agregar un proveedor
router.post('/proveedores',validateAddProveedor, handleValidationErrors,  ProveedorController.add);
// Ruta para actualizar un proveedor por su ID
router.put('/proveedores/:id', validateUpdateProveedor, handleValidationErrors, ProveedorController.update);
// Ruta para eliminar un proveedor por su ID
router.delete('/proveedores/:id', ProveedorController.delete);
module.exports = router;