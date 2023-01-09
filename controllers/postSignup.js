const { request, response } = require("express");
const { v4: uuidv4 } = require('uuid');
const { dbConnection } = require("../database/config");
const { existeUsuario } = require("../helpers/existe-usuario");
const { hashPassword } = require("../helpers/hash-password");

const postSignup = async(req=request, res=response) => {
    const {username, password} = req.body;
    
    //Verificar si ya existe un usuario registrado con ese username
    existeUsuario(username)
        .then( ans => {
            req.flash('message','Ya existe ese nombre de usuario');
            req.flash('class','info');
            res.redirect('/signup');
        })
        .catch( async(ans) => {
            
            //Crear el id del usuario
            const id = uuidv4();

            //Luego hasher el password si todo esta bien
            const passHashed = hashPassword(password);
            
            const connection = dbConnection();
            
            (await connection).execute(
                'INSERT INTO usuarios(id_usuario,username,password) VALUES(?,?,?)',
                [id,username, passHashed],
                async (err, results, fields) => {
                    
                    (await connection).end();
                    req.flash('message','Registrado exitosamente');
                    req.flash('class','info');
                    res.redirect('/signup');

                });

        });
};

module.exports = {
    postSignup
};