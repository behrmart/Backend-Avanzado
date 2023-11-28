

const asyncHandler = require('express-async-handler')

const Tarea = require ('../model/tareasModel')

const getTareas = asyncHandler( async (req, res) => {
    const tareas = await Tarea.find()
    res.status(200).json(tareas)
})

const setTareas = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body.texto){
        res.status(400)
        throw new Error("Dar una descripcion de texto")
    }

    const tarea = await Tarea.create({
        texto: req.body.texto,
        email: req.body.email
    })
    res.status(201).json({ tarea })
})

const updateTareas = asyncHandler(async (req, res) => {
    res.status(200).json({message: `PUT Modificar la tarea ${req.params.id}`})
})


const deleteTareas = asyncHandler(async (req, res) => {
    res.status(204).json({message: `DEL Borrar la tarea ${req.params.id}`})
})


module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}