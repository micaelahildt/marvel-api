const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const favourite = require('./favourite');
const hero = require('./hero');
const team = require('./team');
const user = require('./user');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/favourite', favourite);
router.use('/hero', hero);
router.use('/team', team);
router.use('/user', user);

module.exports = router;
