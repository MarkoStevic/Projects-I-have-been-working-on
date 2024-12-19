import React from 'react'
import bgImage from "../assets/pokemon-card-bg.jpg"

const CatchListCard = ({ name, species, image }) => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className=' bg-no-repeat bg-cover bg-center  w-48 h-64 flex flex-col justify-around items-center m-3 p-2 rounded-xl text-lg hover:text-white '  >
            <h2 className=' w-fit h-fit'> {name} </h2>
            <img className=' w-full h-[55%] bg-sky-500 rounded-2xl ' src={image} alt='Image of pokemon' />
            <span> {species} </span>
            <button className=' w-fit h-fit bg-orange-700 rounded-xl p-2 hover:bg-orange-900 hover:text-sky-500 hover:scale-110 ' >Delete</button>
        </div>
    )
}

export default CatchListCard