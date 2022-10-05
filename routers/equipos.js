const express = require('express');
const {equipos} = require('../datos/sistema_esquema.js').sistemaSMAO

const routerEquipos = express.Router();

routerEquipos.use(express.json())

routerEquipos.get('/', (req,res) => {
    res.json(equipos)
})

module.exports = routerEquipos