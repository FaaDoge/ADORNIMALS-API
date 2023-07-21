const { body, validationResult } = require('express-validator');

// Función de validación para agregar una persona
const validateAddPersona = [
  body('ci').notEmpty().withMessage('El campo CI es obligatorio'),
  body('nombre').notEmpty().withMessage('El campo Nombre es obligatorio'),
  body('apellido').notEmpty().withMessage('El campo Apellido es obligatorio'),
  body('correo').notEmpty().withMessage('El campo Correo es obligatorio').isEmail().withMessage('El Correo debe ser una dirección de correo válida'),
];

// Función de validación para actualizar una persona
const validateUpdatePersona = [
  body('ci').notEmpty().withMessage('El campo CI es obligatorio'),
  body('nombre').notEmpty().withMessage('El campo Nombre es obligatorio'),
  body('apellido').notEmpty().withMessage('El campo Apellido es obligatorio'),
  body('correo').notEmpty().withMessage('El campo Correo es obligatorio').isEmail().withMessage('El Correo debe ser una dirección de correo válida'),
];

// Función de validación para agregar un usuario
const validateAddUsuario = [
  body('NOMBRE_USUARIO').notEmpty().withMessage('El campo Nombre de Usuario es obligatorio'),
  body('PASSWORD').notEmpty().withMessage('El campo Contraseña es obligatorio'),
  // Agrega más validaciones para los campos de la tabla "usuario"
];

// Función de validación para actualizar un usuario
const validateUpdateUsuario = [
  body('NOMBRE_USUARIO').notEmpty().withMessage('El campo Nombre de Usuario es obligatorio'),
  body('PASSWORD').notEmpty().withMessage('El campo Contraseña es obligatorio'),
  // Agrega más validaciones para los campos de la tabla "usuario"
];

// Función de validación para agregar una compra
const validateAddCompra = [
  body('FECHA').notEmpty().withMessage('El campo Fecha es obligatorio'),
  // Agrega más validaciones para los campos de la tabla "compra"
];

// Función de validación para agregar un rol
const validateAddRol = [
  body('NOMBRE').notEmpty().withMessage('El campo Nombre es obligatorio'),
  // Agrega más validaciones para los campos de la tabla "rol"
];

// Función de validación para agregar un producto
const validateAddProducto = [
  body('NOMBRE').notEmpty().withMessage('El campo Nombre es obligatorio'),
  body('DESCRIPCION').notEmpty().withMessage('El campo Descripción es obligatorio'),
  body('CALIFICACION').notEmpty().withMessage('El campo Calificación es obligatorio').isInt({ min: 1, max: 5 }).withMessage('La Calificación debe ser un número entero entre 1 y 5'),
  body('PRECIOPROVEEDOR').notEmpty().withMessage('El campo Precio del Proveedor es obligatorio').isDecimal({ decimal_digits: '2' }).withMessage('El Precio del Proveedor debe ser un número decimal con dos decimales'),
  body('COMISION').notEmpty().withMessage('El campo Comisión es obligatorio').isDecimal({ decimal_digits: '2' }).withMessage('La Comisión debe ser un número decimal con dos decimales'),
  body('IDTIPO').notEmpty().withMessage('El campo ID Tipo es obligatorio').isInt().withMessage('El ID Tipo debe ser un número entero'),
  // Agrega más validaciones para los campos de la tabla "producto"
];
const validateUpdateProducto = [
  body('NOMBRE').notEmpty().withMessage('El campo Nombre es obligatorio'),
  body('DESCRIPCION').notEmpty().withMessage('El campo Descripción es obligatorio'),
  body('CALIFICACION').notEmpty().withMessage('El campo Calificación es obligatorio').isInt({ min: 1, max: 5 }).withMessage('La Calificación debe ser un número entero entre 1 y 5'),
  body('PRECIOPROVEEDOR').notEmpty().withMessage('El campo Precio del Proveedor es obligatorio').isDecimal({ decimal_digits: '2' }).withMessage('El Precio del Proveedor debe ser un número decimal con dos decimales'),
  body('COMISION').notEmpty().withMessage('El campo Comisión es obligatorio').isDecimal({ decimal_digits: '2' }).withMessage('La Comisión debe ser un número decimal con dos decimales'),
  body('IDTIPO').notEmpty().withMessage('El campo ID Tipo es obligatorio').isInt().withMessage('El ID Tipo debe ser un número entero'),
  // Agrega más validaciones para los campos de la tabla "producto"
];
// Función de validación para agregar un proveedor
const validateAddProveedor = [
  body('NOMBRE').notEmpty().withMessage('El campo Nombre es obligatorio'),
  body('DIRECCION').notEmpty().withMessage('El campo Dirección es obligatorio'),
  body('TELEFONO').notEmpty().withMessage('El campo Teléfono es obligatorio'),
  body('CORREO').notEmpty().withMessage('El campo Correo es obligatorio').isEmail().withMessage('El Correo debe ser una dirección de correo válida'),
  // Agrega más validaciones para los campos de la tabla "proveedor"
];
const validateUpdateProveedor = [
  body('NOMBRE').notEmpty().withMessage('El campo Nombre es obligatorio'),
  body('DIRECCION').notEmpty().withMessage('El campo Dirección es obligatorio'),
  body('TELEFONO').notEmpty().withMessage('El campo Teléfono es obligatorio'),
  body('CORREO').notEmpty().withMessage('El campo Correo es obligatorio').isEmail().withMessage('El Correo debe ser una dirección de correo válida'),
  // Agrega más validaciones para los campos de la tabla "proveedor"
];

// Función de validación para agregar un tipo
const validateAddTipo = [
  body('NOMBRE').notEmpty().withMessage('El campo Nombre es obligatorio'),
  // Agrega más validaciones para los campos de la tabla "tipo"
];

// Función para manejar los errores de validación
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateAddPersona,
  validateUpdatePersona,
  validateAddUsuario,
  validateUpdateUsuario,
  validateAddCompra,
  validateAddRol,
  validateAddProducto,
  validateAddProveedor,
  validateAddTipo,
  validateUpdateProducto,
  validateUpdateProveedor,
  handleValidationErrors,
};
