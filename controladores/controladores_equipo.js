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

////////////////// - Agregar un nuevo Equipo - POST - //////////////////

controladorEquipos.post('/post', (req, res) => {
    let equipoNuevo = {
        "equipoId": "3",
        "nombEquipo": "Toshiba",
        "descripcion": "Laptop Negra",
        "serial": "15IF89AEP98",
        "fecha_ini": "04/04/2022",
        "fecha_ult": "09/11/2022",
        "fecha_man": "03/10/2022"
    };
    res.json(equipos);
});