const express = require('express')
const router = express.Router()
const fetch= require('node-fetch')

router.get('/', (req,res) => {
    res.send("Entra a las siguientes rutas /predecirgenero/nombre y predeciredad/nombre, esto es despues del pipeline")
})

router.get('/predecirgenero/:nombre', async (req,res) => {
    nombre = req.params.nombre
    const response = await fetch('https://api.genderize.io?name='+nombre);
    const data = await response.json();
    res.send(data)
})

router.get('/predeciredad/:nombre', async (req,res) => {
    nombre = req.params.nombre
    const response = await fetch('https://api.agify.io?name='+nombre);
    const data = await response.json();
    res.send(data)
})

router.post('/post', (req,res) => {
    res.send('post')
})

module.exports = router
