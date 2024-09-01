// const connection = require('../config/db');

// const obtenerProductos = (req,res)=>{
//     const consulta = 'select * from productos';
//     connection.query(consulta, (err,results)=>{
//         if (err) throw err;
//         res.json(results)
//     })
// }

// const agregarProducto = (req,res) =>{
//     const {nombre,descripcion, precio,stock,categoria,imagen} = req.body;
//     if(!nombre || !descripcion|| !precio ||!stock||!categoria||!imagen){
//         return res.status(400).json({error:'Por favor, complete todos los campos'});
//     }
//     const consulta = 'insert into productos(nombre,descripcion,precio,stock,categoria,imagen) VALUES (?,?,?,?,?,?)';
//     const values = [nombre,descripcion, precio,stock,categoria,imagen];
//     connection.query(consulta,values,(err,results)=>{
//         if (err){
//             console.error('Error al insertar producto',err);
//             return res.status(500).json({ message:'Error al insertar el producto'});
//         }
//         res.status(201).json({message:'Producto insertado con exito',productoId: results.insertId})
//     })

// }


// module.exports ={
//     obtenerProductos,
//     agregarProducto
// }

const connection = require('../config/db');

// Obtener productos
const obtenerProductos = async (req, res) => {
  try {
    const [results] = await connection.query('SELECT * FROM productos');
    res.json(results);
  } catch (err) {
    console.error('Error al obtener productos', err);
    res.status(500).json({ message: 'Error al obtener productos' });
  }
};

// Agregar producto
const agregarProducto = async (req, res) => {
  const { nombre, descripcion, precio, stock, categoria, imagen } = req.body;

  if (!nombre || !descripcion || !precio || !stock || !categoria || !imagen) {
    return res.status(400).json({ error: 'Por favor, complete todos los campos' });
  }

  const consulta = 'INSERT INTO productos (nombre, descripcion, precio, stock, categoria, imagen) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [nombre, descripcion, precio, stock, categoria, imagen];

  try {
    const [result] = await connection.query(consulta, values);
    res.status(201).json({ message: 'Producto insertado con éxito', productoId: result.insertId });
  } catch (err) {
    console.error('Error al insertar producto', err);
    res.status(500).json({ message: 'Error al insertar el producto' });
  }
};

module.exports = {
  obtenerProductos,
  agregarProducto
};