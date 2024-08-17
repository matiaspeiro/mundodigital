import React from 'react'
import Button from './Button'

const CharacterCard = ({img,nombre,status,species}) => {
  return (
    <div className='CharacterCard'>
        <img src={img} alt="" />
        <h3>Nombre: {nombre}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <Button></Button>
    </div>
  )
}

export default CharacterCard