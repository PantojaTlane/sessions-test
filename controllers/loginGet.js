const { request, response } = require("express");

const loginGet = (req=request, res=response) => {
    const message = req.flash('message');
    const type = req.flash('class');
    res.render('login',{titulo: 'Login', signup: true, login: false, message, type});
};

module.exports = {
    loginGet
};