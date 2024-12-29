import express from "express";
import { formularioLogin, formularioOlvidePassword, formularioRegistro } from "../controllers/usersController.js";

//Importamos la funcionalidad de Router de Express
const router = express.Router();


router.get('/login', formularioLogin);
router.get('/registro' , formularioRegistro);
router.get('/olvide-password' , formularioOlvidePassword);

router.get('/nosotros', function (req, res) {
    console.log('Hola');
    res.send('Hola, somos nosotros')
});

export default router