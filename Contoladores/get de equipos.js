const express = require('express');
const {equipos} = require('../datos/sistema_esquema.js').sistemaSMAO
const controladorEquipos = express.Router();

controladorEquipos.use(express.json())

////////////////// - Buscar un Equipo por ID único - GET - //////////////////

controladorEquipos.get('/:equipoId', (req,res) => {
    const equipoId = req.params.equipoId;
    const resultados = equipos.filter(equipos => equipos.equipoId === equipoId);

    if (resultados.length === 0){
        return res.status(404).send(`No se encontro ningun equipo con el id ${equipoId}.`)
    }
    res.json(resultados);
})