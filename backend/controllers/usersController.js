const formularioLogin = (req, res) => {
    res.render('auth/login', {
        autenticado: true,
        pagina: 'Crear cuenta 2'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        autenticado: true,
        texto: 'Holaaaaazzzaaaaaxxxxzzzzzzzzzzzzaazzxzxzxzxzaaaaaaaaax'
    })
}

export {
    formularioLogin,
    formularioRegistro
}