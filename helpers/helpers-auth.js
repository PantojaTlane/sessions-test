const session = require('express-session');
const { request, response } = require("express");

//Verificar si esta autenticado
const estaAutenticado = (req = request, res = response, next) => {
    if(req.session.user){
        next();
    }else{
        res.redirect('/login');
    };
}

const noEstaAutenticado = (req=request, res=response, next) => {
    req.session.user ? res.redirect('/bienvenido') : next();
};


module.exports = {
    estaAutenticado,
    noEstaAutenticado
};