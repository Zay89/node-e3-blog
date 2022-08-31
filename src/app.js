//* Dependencias
const express = require('express')
const passport = require('passport')
require('./middlewares/auth.middleware')(passport)

//* Config
const config = require('./config')

//*Archivos de rutas
const userRouter = require('./users/users.router').router
const authRouter = require('./auth/auth.router').router
const postRouter = require("./post/post.router").router;


//* Configuraciones iniciales
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use("/api/v1/posts", postRouter)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})
