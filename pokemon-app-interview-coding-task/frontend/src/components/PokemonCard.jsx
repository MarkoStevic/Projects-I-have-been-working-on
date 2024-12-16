import React from 'react'
import pokeCardBg from "../assets/pokemon-card-bg.jpg"


const PokemonCard = ({ name, image, species, captureRate, showDetails }) => {
  return (
    <div style={{ backgroundImage: `url(${pokeCardBg})` }} className=' bg-no-repeat bg-cover bg-center  w-48 h-64 flex flex-col justify-center items-center m-3 p-2 rounded-xl text-lg hover:text-white '  >
      <h2 className=' w-fit h-fit'> {name} </h2>
      <img className=' w-full h-[40%] bg-sky-500 rounded-2xl ' src={image} alt='Image of pokemon' />
      <span> {species} </span>
      <span> {captureRate} </span>
      <div className=' flex justify-center items-center w-full text-base p-2 gap-x-2 '>
        <span>
          <button className=' bg-orange-700 p-2 rounded hover:bg-orange-800 hover:text-sky-400 ' onClick={ () => showDetails(name)} >
            Details
          </button>
        </span>
        <span>
          <button className='  bg-orange-700 rounded hover:bg-orange-800 hover:text-sky-400 '>
            Add to catch list
          </button>
        </span>
      </div>
    </div>
  )
}

export default PokemonCard