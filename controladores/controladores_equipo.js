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
    equipos.push(equipoNuevo);
    res.json(equipos);
});

// Se agregó la función PUT para editar los equipos existentes
// Actualmente da error
////////////////// - Editar un Equipo existente - PUT - //////////////////

controladorEquipos.put('/put/:equipoId', (req, res) => {
    const equipoActualizado = {
        "equipoId": "2",
        "nombEquipo": "PC DELL",
        "descripcion": "Computadora de Escritorio DELL",
        "serial": "FJWE9T4TJ130R829",
        "fecha_ini": "07/08/2021",
        "fecha_ult": "04/09/2021",
        "fecha_man": "04/09/2021"
    };
    const equipoId = req.params.equipoId;

    const indice = equipos.findIndex(equipos => equipos.equipoId == equipoId)

    if (indice >= 0) {
        equipos[indice] = equipoActualizado;
    } else {
        return res.status(404).send(`No se encontró un trabajo con el id ${equipoId} al cual actualizar la informacion`);
    }
    res.json(equipos)
})

module.exports = controladorEquipos