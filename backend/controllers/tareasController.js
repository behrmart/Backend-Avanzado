

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

    const tarea = await Tarea.findById(req.params.id)
    if (!tarea){
        res.status(400)
        throw new Error('La tarea no fue encontrada')
    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(tareaUpdated)
})


const deleteTareas = asyncHandler(async (req, res) => {
    
    const tarea = await Tarea.findById(req.params.id)
    if (!tarea){
        res.status(400)
        throw new Error('La tarea no fue encontrada')
    }

    await Tarea.deleteOne(tarea) //Las dos son correctas

    //await Tarea.findByIdAndDelete(req.params.id)

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}