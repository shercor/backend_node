import express from "express";
import { formularioLogin, formularioRegistro } from "../controllers/usersController.js";

//Importamos la funcionalidad de Router de Express
const router = express.Router();


router.get('/login', formularioLogin);
router.get('/registro' , formularioRegistro);

router.get('/nosotros', function (req, res) {
    console.log('Hola');
    res.send('Hola, somos nosotros')
});

export default router