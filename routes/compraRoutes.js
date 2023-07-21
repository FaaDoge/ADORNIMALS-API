// routes/compraRoutes.js
const express = require('express');
const router = express.Router();
const CompraController = require('../controllers/compraController');
const authMiddleware = require('../utils/authMiddleware');
const { validateAddCompra, handleValidationErrors } = require('../middlewares/validationMiddleware');
// Ruta para obtener todas las compras
router.get('/compras', CompraController.getAll);

// Ruta para obtener una compra por su ID
router.get('/compras/:id', CompraController.getById);

// Ruta para agregar una compra
router.post('/compras',validateAddCompra, handleValidationErrors, CompraController.add);

// Ruta para actualizar una compra por su ID
router.put('/compras/:id', CompraController.update);

// Ruta para eliminar una compra por su ID
router.delete('/compras/:id', CompraController.delete);



module.exports = router;
