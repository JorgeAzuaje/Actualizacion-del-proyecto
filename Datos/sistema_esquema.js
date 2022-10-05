let sistemaSMAO = {
    equipos: [
        {
            equipoId: '1',
            nombEquipo: 'VIT_8990',
            descripcion:'Laptop Gris',
            serial:'13K89F7S6DA',
            fecha_ini: '04/04/2020',
            fecha_ult:'09/11/2020',
            fecha_man:'03/09/2021',
            id_Trabajo: '1, 3'
        },{
            equipoId: '2',
            nombEquipo: 'PC_HP',
            descripcion: 'Computadora de Escritorio HP',
            serial: 'FJWE9T4TJ130R829',
            fecha_ini: '07/08/2021',
            fecha_ult: '04/09/2021',
            fecha_man: '04/09/2021',
            id_Trabajo: '2'
        }
    ],
    trabajos: [{
        idTrabajo: '1',
        idEquipo: '1',
        nombreEquipos:'VIT 8990',
        fechaPlan:'03/04/2020',
        fechaIni: '06/09/2020',
        fechaFin: '20/12/2020',
        status: 'Terminado',
        obsTecnico: 'Tarjeta de Red Defectuosa'
    },{
        idTrabajo: '2',
        idEquipo: '2',
        nombreEquipos:'PC HP',
        fechaPlan:'03/04/2021',
        fechaIni: '06/05/2021',
        fechaFin: '20/06/2021',
        status: 'Terminado',
        obsTecnico: 'Memoria RAM dañada'
    },{
        idTrabajo: '3',
        idEquipo: '1',
        nombreEquipos:'VIT 8990',
        fechaPlan:'03/04/2022',
        fechaIni: '06/09/2022',
        fechaFin: '20/12/2022',
        status: 'Terminado',
        obsTecnico: 'Disipador dañado'
    }
    ]
}

module.exports.sistemaSMAO = sistemaSMAO;