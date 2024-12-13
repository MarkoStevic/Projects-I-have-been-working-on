import React from 'react'

const PokemonCard = ( {name, image, species, captureRate} ) => {
  return (
    <div className=' w-20 h-28 flex flex-col justify-center items-center ' >
        <h2> {name} </h2>
        <img src={image} alt='Image of pokemon'/>
        <span>{species}</span>
        <span> {captureRate} </span>
    </div>
  )
}

export default PokemonCard