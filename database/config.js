const mysql = require('mysql2');

const dbConnection = async() => {

    try {
        const connection = await mysql.createConnection({
            host: 'us-east.connect.psdb.cloud',
            user: 'xqci0closrn3q72vw94h',
            password: 'pscale_pw_yoyBoLQqdLaN2SJ9lPr5h5qXihrSVX7yJSF6DQQPc8o',
            database: 'usuarios',
            ssl: {
                rejectUnauthorized: false
            }
        });   
        return connection;

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la base de datos');
    }

};

module.exports = {
    dbConnection
};