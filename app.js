const express= require('express');
const app = express();

const {sistemaSMAO} = require('./datos/sistema_esquema.js');

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