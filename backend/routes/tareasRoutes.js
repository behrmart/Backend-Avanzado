const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: "Obtener tareas"})
})

router.post('/', (req, res) => {
    res.status(201).json({message: "Crear tareas"})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Modificar la tarea ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(204).json({message: `Borrar la tarea ${req.params.id}`})
})

module.exports = router