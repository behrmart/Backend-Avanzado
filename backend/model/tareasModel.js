const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,  // Agregar ususarios referenciado a collecion de Users
        required: true,
        ref: 'User'
    },

    texto: {
        type: String,
        required: [true, "Teclea una descripcion de la tarea"]
    },
    email: {
        type: String
    },
    completada: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // crea campos automaticos de timestamps
})

module.exports = mongoose.model('Tarea', tareaSchema)  // MOdelo en  Letra Capital en singular por "tareas" collection