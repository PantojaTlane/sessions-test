const {Router} = require('express');
const { loginGet } = require('../controllers/loginGet');
const { loginPost } = require('../controllers/loginPost');
const { noEstaAutenticado } = require('../helpers/helpers-auth');
const router = Router();

router.get('/', noEstaAutenticado, loginGet)

router.post('/', loginPost)


module.exports = router;