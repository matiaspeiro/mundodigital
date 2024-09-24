import React from 'react'

const Cart = ({carrito,onActualizarCantidad,onEliminar,onPagar}) => {
    //console.log('1')
  return (
    <div>
        <h2>CARRITO DE COMPRAS</h2>
        {carrito.length === 0 ? (<p> No hay productos en el carrito</p>) : 
        (<ul>
            {
                carrito.map(({producto,cantidad})=>(
                    <li key={producto.id}> 
                     {producto.nombre} - $ {producto.precio} - cantidad: {cantidad} x
                    {/* <input 
                        type="number" 
                        min={1}
                        value={cantidad}
                        onChange={onActualizarCantidad(producto.id,parseInt(cantidad) )}
                    /> */}
                    <button onClick={()=>onEliminar(producto.id)}>Eliminar</button>
                    
                    </li>
                ))
            }
        </ul>)}
        {carrito.length > 0 && <button onClick={onPagar}>Pagar</button>}
        
    </div>
  )
}

export default Cart