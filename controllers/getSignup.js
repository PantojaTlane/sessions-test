const { request, response } = require("express");

const getSignup = (req=request, res=response) => {
    const message =req.flash('message'); 
    const type = req.flash('class');
    res.render('signup',{titulo: 'Signup', signup: false, login: true, message, type});
};

module.exports = {
    getSignup
};