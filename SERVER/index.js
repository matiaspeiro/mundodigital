const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const productosRoutes = require('./routes/productosRoutes')

app.use(cors());

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use(express.json());

app.use('/api/productos',productosRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto  ${PORT}`)
});



