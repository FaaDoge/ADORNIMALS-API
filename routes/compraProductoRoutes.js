// routes/compraProductoRoutes.js
const express = require('express');
const router = express.Router();
const CompraProductoController = require('../controllers/compraProductoController');
const authMiddleware = require('../utils/authMiddleware');

// Ruta para obtener todas las compras productos
router.get('/compras-productos', CompraProductoController.getAll);

// Ruta para obtener una compra producto por su ID
router.get('/compras-productos/:id', CompraProductoController.getById);

// Ruta para agregar una compra producto
router.post('/compras-productos', CompraProductoController.add);

// Ruta para actualizar una compra producto por su ID
router.put('/compras-productos/:id', CompraProductoController.update);

// Ruta para eliminar una compra producto por su ID
router.delete('/compras-productos/:id', CompraProductoController.delete);



module.exports = router;
