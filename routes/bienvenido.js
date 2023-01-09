const {Router, request, response} = require('express');
const { bienvenidoGet } = require('../controllers/bienvenidoGet');
const { estaAutenticado } = require('../helpers/helpers-auth');
const router = Router();


router.get('/', [estaAutenticado], bienvenidoGet)


module.exports = router;