const formularioLogin = (req, res) => {
    res.render('auth/login', {
        autenticado: true,
        pagina: 'Crear cuenta 2',
        texto: 'Inicia Sesion'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        autenticado: true,
        texto: 'Crear cuenta',
        pagina: 'Registro'
    })
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        autenticado: true,
        texto: 'Recupera tu Password',
        pagina: 'Registro'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
}