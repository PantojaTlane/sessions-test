const {Router} = require("express");
const { getSignup } = require("../controllers/getSignup");
const { postSignup } = require("../controllers/postSignup");
const { noEstaAutenticado } = require("../helpers/helpers-auth");
const router = Router();


router.get('/', noEstaAutenticado ,getSignup);

router.post('/',postSignup);


module.exports = router;