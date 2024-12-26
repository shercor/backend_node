// const express = require('express');
import express from 'express'; //Import con EMS, connfigurado en el package.json con type: module

import usuarioRoutes from './routes/usuarioRoutes.js'

import mysql from 'mysql2/promise';


//Conexión a base de datos
// const connection = await mysql.createConnection({
//   host: process.env.DB_HOST || 'db',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || '',
//   database: process.env.DB_NAME || 'proyecto_node',
// });

// console.log('Conexión a la base de datos establecida');




// (async () => {
//   connection = await mysql.createConnection({
//       host: process.env.DB_HOST || 'db',
//       user: process.env.DB_USER || 'root',
//       password: process.env.DB_PASSWORD || '',
//       database: process.env.DB_NAME || 'proyecto_node',
//   });

//   console.log('Conexión a la base de datos establecida');
// })();

//Crear la app
const app = express();

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
