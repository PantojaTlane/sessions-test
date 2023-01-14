const express = require('express');
const session = require('express-session');
const hbs = require('hbs');
const path = require('path');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const app = express();

const port = process.env.PORT || 3000;

//Middlewares
app.use(express.urlencoded({extended: false}))
const optionsMySQL = {
    host: 'us-east.connect.psdb.cloud',
    user: 'xqci0closrn3q72vw94h',
    password: 'pscale_pw_yoyBoLQqdLaN2SJ9lPr5h5qXihrSVX7yJSF6DQQPc8o',
    database: 'usuarios',
    ssl: {
        rejectUnauthorized: false
    }
};
const sessionStore = new MySQLStore(optionsMySQL);
app.use(session({
    key: 'session_cookie_login',
    secret: 'Hola112345',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static('public'));
app.use(flash());

//Routes
app.use('/login', require('./routes/login'));
app.use('/', require('./routes/index'));
app.use('/bienvenido', require('./routes/bienvenido'))
app.use('/logout', require('./routes/logout'));
app.use('/signup',require('./routes/signup'));

app.listen(port, () => {
    console.log("Escuchando en el puerto",port)
});
