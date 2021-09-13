const express = require('express');
const app = express();
const morgan = require('morgan'); // Es un middleware(Procesa Datos)

//Settings
app.set('port',process.env.PORT || 3001) //Si existe un puerto en la nube utiliza env.PORT sino 3001
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));//Mensaje de Consola sobre los detalles de los puertos
app.use(morgan('combined'));//Mensaje de Consola sobre los detalles de los puertos
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes

// app.get('/',(req,res) => {
//     res.send('Hello World');
// });

// app.get('/',(req,res) => {
//     res.json({'Title':'Hello World'});
// });

app.use(require('./routes/index.js'));

app.use('/api/movies',require('./routes/movies.js'));// api/movies es el directorio por defecto que empiezan todas las rutas que requieren de ese movies.js

app.use('/api/',require('./routes/users.js'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})