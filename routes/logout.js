const {Router, request, response} = require('express');
const { logoutGet } = require('../controllers/logoutGet');
const router = Router();


router.get('/',logoutGet)


module.exports = router;