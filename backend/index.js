// const express = require('express');
import express from 'express'; //Import con EMS, connfigurado en el package.json con type: module

import usuarioRoutes from './routes/usuarioRoutes.js'

import db from './config/db.js'

//Crear la app
const app = express();

//Conexion a la db con Sequelize
try{
    await db.authenticate();
    console.log('Conexion a la base de datos establecida')
} catch (error) {
    console.log(error)
}

// Habilitar Template Engine: Pug
app.set('view engine' , 'pug')
app.set('views' , './views')

// Carpeta Pública, para setear donde estaran los archivos publicos
app.use(express.static('public'))

// Routing
app.use('/auth' , usuarioRoutes)

//Definir un puerto y arrancar el proyecto

const port = 3000;

app.listen(port, () =>
    console.log(`El servidor esta funcionando correctamente en el puerto ${port}`)
)
