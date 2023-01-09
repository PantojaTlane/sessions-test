const { dbConnection } = require("../database/config");

const existeUsuario = async (username) => {
    
    const connection = dbConnection();

    return new Promise(async(resolve, reject) => {
        const existe = (await connection).execute(
            'SELECT * FROM usuarios WHERE username = ?',
            [username],
            (err,results,fields)=>{
                if(results.length > 0){
                    resolve(true);
                }else{
                    reject(false);
                }
            });
    });
    
};

module.exports = {
    existeUsuario
};