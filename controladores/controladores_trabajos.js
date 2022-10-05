const express = require('express');
const {trabajos} = require('../datos/sistema_esquema.js').sistemaSMAO
const controladorTrabajos = express.Router();

controladorTrabajos.use(express.json())

////////////////// - Buscar un Trabajo por ID único - GET - //////////////////

controladorTrabajos.get('/trabajoId/:idTrabajo', (req, res) => {
    const idTrabajo = req.params.idTrabajo;
    const resultados = trabajos.filter(trabajos => trabajos.idTrabajo === idTrabajo)

    if(resultados.length === 0) {
        return res.status(404).send(`No se encontro ningun trabajo con el ID ${idTrabajo}`)
    }
    res.send(JSON.stringify(resultados))
})
