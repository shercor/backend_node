// const express = require('express');
import express from 'express'; //Import con EMS, connfigurado en el package.json con type: module

import usuarioRoutes from './routes/usuarioRoutes.js'

import mysql from 'mysql2/promise';


//Conexión a base de datos
const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'bienes_raices',
});

console.log('Conexión a la base de datos establecida');

//Crear la app
const app = express();

// Routing

// app.use, a diferencia de app.get,  busca TODAS las rutas que inicien con lo dado, en este caso, la diagonal
app.use('/' , usuarioRoutes)



//Definir un puerto y arrancar el proyecto

const port = 3000;

app.listen(port, () =>
    console.log(`El servidor esta funcionando correctamente en el puerto ${port}`)
)
