// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// Configurar Passport
require('./config/passport');

// Middleware de autenticación
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutas
const authRoutes = require('./routes/authRoutes');
const personaRoutes = require('./routes/personaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const usuarioCompraRoutes = require('./routes/usuarioCompraRoutes');
const rolRoutes = require('./routes/rolRoutes');
const usuarioRolRoutes = require('./routes/rolUsuarioRoutes');
const compraroutes = require('./routes/compraRoutes');
const compraProductoRoutes = require('./routes/compraProductoRoutes');
const productoRoutes = require('./routes/productoRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const tipoRoutes = require('./routes/tipoRoutes');
//pp.use('/api/auth', authRoutes); // Ruta base para autenticación
//app.use('/api', personaRoutes); // Ruta base para las operaciones con personas

app.use('/api', personaRoutes,usuarioRoutes,tipoRoutes,proveedorRoutes,usuarioCompraRoutes,usuarioRolRoutes,productoRoutes,rolRoutes,authRoutes,compraroutes,compraProductoRoutes);
// Ruta para manejar solicitudes GET en la ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Adornimals!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
app.use(passport.initialize());
