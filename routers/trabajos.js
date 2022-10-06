//AGREGADO NUEVO ARCHIVO "trabajos.js" EN LA CARPETA "routers" PARA BUSQUEDA DE TODOS LOS TRABAJOS

const express = require('express')
const {trabajos} = require('../datos/sistema_esquema.js').sistemaSMAO;

const routerTrabajos = express.Router();

routerTrabajos.get('/', (req,res) => {
    res.send(JSON.stringify(trabajos))
})

module.exports = routerTrabajos;