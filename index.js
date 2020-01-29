const express = require('express');
const app = express();
const path = require('path');
global.path = path;

const bodyParser = require('body-parser');
const mysql = require('mysql');

// const {getHomePage} = require('./routes/index');
// const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 5000; 

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cicloturismo',
    port: 8889,
    insecureAuth : true
});
// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.


// connect to database 
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', 'src/vistas'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder


       
   
const {getRoutes} = require('./src/routes/rutas');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
 
//Carpeta estatica
app.use(express.static(path.join(__dirname,'public')));

//Principal
app.get('/', function(req, res){
res.render(path.join(__dirname,'src',path.join('vistas'),path.join('index.ejs'))); 
});

app.get('/inicio', function(req, res){
    res.render(path.join(__dirname,'src',path.join('vistas'),path.join('index.ejs'))); 
    });
    
//Rutas 




//Grupos
app.get('/rutas.', function(req, res){
    res.render(path.join(__dirname,'src',path.join('vistas'),path.join('rutas.ejs'))); 
    });


//Eventos
app.get('/eventos', function(req, res){
    res.render(path.join(__dirname,'src',path.join('vistas'),path.join('eventos.ejs'))); 
    });

//contacto
app.get('/contacto', function(req, res){
    res.render(path.join(__dirname,'src',path.join('vistas'),path.join('contacto.ejs'))); 
    });


//Servidor

app.listen(app.get('port'), function(){
    console.log('Exito');
    console.log(path.join(__dirname,'src',path.join('vistas'),path.join('index.ejs')));
} );