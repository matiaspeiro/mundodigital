import React from 'react'
import Button from './Button'

const CharacterCard = ({img,nombre,descripcion,precio,stock, onAgregar}) => {
  return (
    <div  className='CharacterCard'>
        <img src={img} alt="" />
        <h3>Nombre: {nombre}</h3>
        <p>Descripcion: {descripcion}</p>
        <p>Precio:$ {stock}</p>
        <p>Precio: {precio}</p>
        <Button onClick={onAgregar}/>
    </div>
  )
}

export default CharacterCard