const express = require ('express')
const colors = require('colors')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json()) //para recibir info por un formulario en body
app.use(express.urlencoded({extended: false}))


app.use('/api/tareas', require('./routes/tareasRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Servidor Iniciado en puerto ${port}`))