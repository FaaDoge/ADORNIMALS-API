// routes/productoRoutes.js
const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/productoController');
const authMiddleware = require('../utils/authMiddleware');
const { validateAddProducto,validateUpdateProducto, handleValidationErrors } = require('../middlewares/validationMiddleware');
// Ruta para obtener todos los productos
router.get('/productos', ProductoController.getAll);

// Ruta para obtener un producto por su ID
router.get('/productos/:id', ProductoController.getById);

// Ruta para agregar un producto
router.post('/productos',validateAddProducto,handleValidationErrors, ProductoController.add);

// Ruta para actualizar un producto por su ID
router.put('/productos/:id',validateUpdateProducto, handleValidationErrors, ProductoController.update);

// Ruta para eliminar un producto por su ID
router.delete('/productos/:id', ProductoController.delete);

// Ruta para buscar productos por nombre
router.get('/productos/buscar', ProductoController.search);


module.exports = router;
