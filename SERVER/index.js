const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());

app.use('/cliente',()=>{
    console.log('Hola desde el servidor')
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto  ${PORT}`)
});

