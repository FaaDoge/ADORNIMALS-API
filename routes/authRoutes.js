// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para iniciar sesión y obtener el token JWT
router.post('/login', authController.login);

module.exports = router;
