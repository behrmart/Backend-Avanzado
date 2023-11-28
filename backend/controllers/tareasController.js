const expressAsyncHandler = require("express-async-handler")

const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler( async (req, res) => {
    res.status(200).json({message: "GET Obtener tareas"})
})

const setTareas = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body.texto){
        res.status(400)
        throw new Error("Dar una descripcion de texto")
    }
    res.status(201).json({message: "POST Crear tareas"})
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