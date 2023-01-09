const { request, response } = require("express");
const bcrypt = require('bcrypt');
const { dbConnection } = require("../database/config");
const { existeUsuario } = require("../helpers/existe-usuario");

const loginPost = (req=request, res=response) => {

    const {username, password} = req.body;

    //Ver si existe el usuario
    existeUsuario(username)
        .then( async(ans) => {
            
            //Comparar contraseñas
            const connection = dbConnection();
            (await connection).execute(
                'SELECT id_usuario,password FROM usuarios WHERE username = ?',
                [username],
                async (err, result, fields) => {
                    
                    (await connection).end();

                    const match = bcrypt.compareSync(password, result[0].password);

                    if(match){

                        const usuario = {
                            id: result[0].id_usuario,
                            name: username
                        };
                        req.session.regenerate(()=>{
                            req.session.user = usuario;
                            req.session.save(()=>{
                                req.flash('message',`Bienvenido ${username}`);
                                res.redirect('/bienvenido');
                            });
                        });

                    }else{

                        req.flash('message','Contraseña incorrecta');
                        req.flash('class','error');
                        res.redirect('/login');

                    }

                });

        })
        .catch( ans => {
            req.flash('message','No existe el usuario');
            req.flash('class','error');
            res.redirect('/login')
        });
}

module.exports = {loginPost};