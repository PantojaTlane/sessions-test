const { request, response } = require("express");

const logoutGet =  (req = request, res = response) => {
    req.session.user = null;
    req.session.destroy( () => {
        res.redirect('/login');
    });
};

module.exports = {
    logoutGet
}