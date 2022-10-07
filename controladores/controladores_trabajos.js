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

controladorTrabajos.post('/post', (req, res) => {
    let trabajoNuevo = {
        "idTrabajo": "4",
        "idEquipo": "2",
        "nombreEquipos":"PC HP",
        "fechaPlan":"06/07/2021",
        "fechaIni": "08/07/2021",
        "fechaFin": "15/07/2021",
        "status": "Terminado",
        "obsTecnico": "Procesador Defectuoso"
};
    trabajos.push(trabajoNuevo);
    res.json(trabajos);
});

////////////////// - Editar un Trabajo existente - PUT - //////////////////

controladorTrabajos.put('/put/:idTrabajo', (req, res) => {
    const trabajoActualizado = {
        "idTrabajo": "2",
        "idEquipo": "2",
        "nombreEquipos":"PC HP",
        "fechaPlan":"06/07/2021",
        "fechaIni": "10/07/2021",
        "fechaFin": "20/08/2021",
        "status": "Terminado",
        "obsTecnico": "Tarjeta Madre",
        "tipoDeTrabajo": "Correctivo"
};
    const idTrabajo = req.params.idTrabajo;

    const indice = trabajos.findIndex(trabajos => trabajos.idTrabajo == idTrabajo)

    if (indice >= 0) {
        trabajos[indice] = trabajoActualizado;
    } else {
        return res.status(404).send(`No se encontró un trabajo con el id ${idTrabajo} al cual actualizar la informacion`);
    }
    res.json(trabajos)

})

////////////////// - Editar un Trabajo existente - PATCH - //////////////////

controladorTrabajos.patch('/patch/:idTrabajo', (req, res) => {
    const infoTrabActualizada = {
        "idEquipo": "1",
        "nombreEquipos":"VIT 8990",
        "obsTecnico": "Boton de Inicio Dañado"
    };
    const idTrabajo = req.params.idTrabajo;

    const indice = trabajos.findIndex(trabajos => trabajos.idTrabajo == idTrabajo);

    if (indice >= 0) {
        const trabajoAModificar = trabajos[indice]
        Object.assign(trabajoAModificar, infoTrabActualizada);
    } else {
        return res.status(404).send(`No se encontró un trabajo con el id ${idTrabajo} al cual actualizar la información`);
    }
    res.json(trabajos)
})
