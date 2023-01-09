const mysql = require('mysql2');

const dbConnection = async() => {

    try {
        const connection = await mysql.createConnection({
            host: 'us-cdbr-east-06.cleardb.net',
            user: 'b42d0c9073ac7b',
            password: '5732261d',
            database: 'heroku_346c8b8f154ebef'
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