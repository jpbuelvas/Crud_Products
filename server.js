const express = require('express');
const app = express();
//Importar mongocost 
const archivoBD = require('./conexion')
//import el de rutas y los modelos
const rutaProducto = require('./rutas/producto')
//import body
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/producto',rutaProducto)

app.get('/', (req, res) =>{
    res.send('Bienvendo a el index')
}
)
//Configuracion de server 
app.listen(5000,function(){console.log('Server listening on port 5000')})
//creamos rutas
