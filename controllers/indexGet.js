const { request, response } = require("express");

const indexGet = (req = request,res= response)=>{
    res.render('index',{titulo: 'Inicio', signup: true, login: true});
};

module.exports = {
    indexGet
};