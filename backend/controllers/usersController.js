const registrarUser = (req, res) => {
    res.status(201).json({message: 'Usuario Registrado'})
}

const loginUser = (req, res) => {
    res.status(200).json({message: 'Usuario Logeado'})
}

const misDatos = (req, res) => {
    res.status(200).json({message: 'mis datos'})
}

module.exports = {
    registrarUser,
    loginUser,
    misDatos
}