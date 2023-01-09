const {Router, request, response} = require('express');
const { indexGet } = require('../controllers/indexGet');
const { noEstaAutenticado } = require('../helpers/helpers-auth');
const router = Router();


router.get('/',noEstaAutenticado,indexGet);


module.exports = router;