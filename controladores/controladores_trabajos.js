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

////////////////// - Buscar un Trabajo por ID único del equipo - GET - //////////////////

controladorTrabajos.get('/equipoId/:idEquipo', (req, res) => {
    const idEquipo = req.params.idEquipo;
    const resultados = trabajos.filter(trabajos => trabajos.idEquipo === idEquipo)

    if(resultados.length === 0) {
        return res.status(404).send(`No se encontro ningun trabajo con el ID de trabajo ${idEquipo}`)
    }
    res.send(JSON.stringify(resultados))
})

////////////////// - Buscar trabajos por ID único del equipo y buscar uno solo de sus trabajos por ID único del trabajo - GET - //////////////////

controladorTrabajos.get('/equipoId/:idEquipo/:idTrabajo', (req, res) => {
    const idEquipo = req.params.idEquipo;
    const idTrabajo = req.params.idTrabajo;
    
    const resultados = trabajos.filter(trabajos => trabajos.idEquipo === idEquipo && trabajos.idTrabajo === idTrabajo);
    
    if (resultados.length === 0) {
      return res.status(404).send(`No se encontró ningún equipo con id ${idEquipo} con un trabajo con id ${idTrabajo}`);
    }
    res.json(resultados);
});
