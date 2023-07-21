// passport.js
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtUtils = require('../utils/jwtUtils');

const secretKey = 'UwU'; // Cambia esto en producción

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

passport.use(
  new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      // Verificar y obtener el usuario desde el token JWT
      const usuario = await jwtUtils.verificarToken(jwt_payload);

      // Si el usuario existe, lo pasamos a la función done()
      // para indicar que la autenticación fue exitosa
      if (usuario) {
        return done(null, usuario);
      } else {
        // Si el usuario no existe, indicamos que la autenticación falló
        return done(null, false);
      }
    } catch (error) {
      // Si hay un error al verificar el token, indicamos que la autenticación falló
      return done(error, false);
    }
  })
);
