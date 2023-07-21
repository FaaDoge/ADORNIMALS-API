// routes/usuarioCompraRoutes.js
const express = require('express');
const router = express.Router();
const UsuarioCompraController = require('../controllers/usuarioCompraController');
const authMiddleware = require('../utils/authMiddleware');

// Ruta para obtener todos los usuarios compras
router.get('/usuarios-compras', UsuarioCompraController.getAll);

// Ruta para obtener un usuario compra por su ID
router.get('/usuarios-compras/:id', UsuarioCompraController.getById);

// Ruta para agregar un usuario compra
router.post('/usuarios-compras', UsuarioCompraController.add);

// Ruta para actualizar un usuario compra por su ID
router.put('/usuarios-compras/:id', UsuarioCompraController.update);

// Ruta para eliminar un usuario compra por su ID
router.delete('/usuarios-compras/:id', UsuarioCompraController.delete);


module.exports = router;
