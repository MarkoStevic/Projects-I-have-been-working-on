import React from 'react'

const Navbar = () => {
  return (
    <div className = " w-full h-16 flex justify-around items-center bg-sky-800 bg-opacity-80 ">
        <button className = " h-[80%] w-40 text-xl text-stone-400 hover:text-white hover:bg-sky-950 hover:scale-125 " >All pokemons</button>
        <button className = " h-[80%] w-40 text-xl text-stone-400 hover:text-white hover:bg-sky-950 hover:scale-125 ">Catch list</button>
    </div>
  )
}

export default Navbar