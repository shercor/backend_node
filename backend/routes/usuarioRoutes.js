import express from "express";

//Importamos la funcionalidad de Router de Express
const router = express.Router();


router.get('/', function (req, res) {
    //res.send('Hola a todosaaaaaaasddsdssdaaaaaa')
    res.render('auth/login');
});

router.get('/nosotros', function (req, res) {
    res.send('Hola, somos nosotros')
});

export default router