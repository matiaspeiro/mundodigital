import React, { useState } from 'react'
import Button from './Button'

const CharacterCard = ({ producto, onAgregar }) => {

  const [cantidad, setCantidad] = useState(1);

  const handleChangeCantidad = (e) => {
    setCantidad(parseInt(e.target.value))
  }

  const incrementar = () => {
    setCantidad(cantidad + 1)
  }
  const decrementar = () => {
    setCantidad(cantidad - 1)
  }


  return (
    <div className='card'>
      <div className='card-header'>
        <img src={producto.imagen} alt="" />
      </div> 
      <div className='card-body'>
      <h3>Nombre: {producto.nombre}</h3>
      <p>Descripcion: {producto.descripcion}</p>
      <p>Disponible: {producto.stock}</p>
      <p>Precio: $ {producto.precio}</p>
      <span>
        <label htmlFor=""><button onClick={decrementar}>-</button></label>
        <label htmlFor="">{cantidad}</label>
        <label htmlFor=""><button onClick={incrementar}>+</button></label>
      </span>

      <Button onClick={() => onAgregar(producto, cantidad)} />
      </div>
    </div>
  )
}

export default CharacterCard