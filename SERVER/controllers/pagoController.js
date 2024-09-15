const connection = require('../config/db');

const procesarPago = async (req, res) =>{
    try {
        const {productos} = req.body
        console.log('solicitud Front ====> '+productos)
        let total = 0;
        
        console.log(total)
        //Calcular el total

        productos.forEach((producto)=>{
            //  total = total + producto.precio;
            total += parseInt(producto.cantidad) * (parseFloat(producto.producto.precio));
            console.log(total)
        })

        console.log('el total del carrito es '+total)
        const consulta = 'INSERT INTO Orders (total) VALUES (?)'
        const values = [total]
        // crear una nueva orden
        const [result] = await connection.query(consulta,values);
        

        const orderId = result.insertId;

        console.log('orden de venta ',orderId)
        // Insertar detalles de la orden

        for (const producto of productos ){
            await connection.query('INSERT INTO OrderDetails (order_id,product_id,quantity,price) VALUES (?,?,?,?)',[orderId,producto.producto.id,producto.cantidad,producto.producto.precio])
        }

        res.status(200).json({message:'Pago procesado y guardado en la base de datos'});

    } catch (error) {
        console.error("Error al procesar el pago", error);
        res.status(500).json({error:'Error al procesar el pago'})
    }
}

module.exports = {procesarPago}



