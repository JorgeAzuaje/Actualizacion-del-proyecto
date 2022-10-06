const express= require('express');
const app = express();

const {sistemaSMAO} = require('./datos/sistema_esquema.js');

// Routers

const routerEquipos = require('./routers/equipos.js')
app.use('/api/sistema/equipos', routerEquipos);

const routerTrabajos = require('./routers/trabajos.js')
app.use('/api/sistema/trabajos', routerTrabajos);

// Controladores

const controladorEquipos = require('./controladores/controladores_equipos.js')
app.use('/api/sistema/equipos', controladorEquipos)

const controladorTrabajos = require('./controladores/controladores_trabajos.js')
app.use('/api/sistema/trabajos', controladorTrabajos)
////////////////////////////

app.get('/', (req, res) => {
    res.send('Bienvenido al sistema de mantenimiento SMAO 💻.')
});

app.get('/api/sistema', (req, res) => {
    res.send(JSON.stringify(sistemaSMAO))
})

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});