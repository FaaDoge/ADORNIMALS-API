const mysql = require('mysql2/promise'); // Importa el módulo mysql2 con soporte para promesas

// Configurar las credenciales de conexión a la base de datos
const pool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
});

// Exporta el pool de conexión para que esté disponible en otros archivos
module.exports = pool;
