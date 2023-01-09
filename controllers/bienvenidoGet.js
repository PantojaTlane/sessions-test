const { request, response } = require("express");

const bienvenidoGet = (req=request, res=response) => { 
    const {id,name} = req.session.user;
    res.render('bienvenido',{titulo: 'Bienvenido', signup: false, login: false, logout: true, message: req.flash('message'), id, name});
};

module.exports = {
    bienvenidoGet
};