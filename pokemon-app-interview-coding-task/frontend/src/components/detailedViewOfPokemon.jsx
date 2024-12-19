import React from 'react'
import { createPortal } from "react-dom"
import modalDivBg from "../assets/pokemon-card-bg.jpg"

const DetailedViewOfPokemon = ({ onClose, name, image, species, captureRate, height, weight, abilities, addToCatchList }) => {
  return createPortal(
    <div className=' fixed w-full h-[100%] flex justify-center items-center bg-white bg-opacity-50 ' >
      <div style={{ backgroundImage: `url(${modalDivBg})` }} className=" bg-no-repeat bg-cover bg-center w-[35%] h-[95vh] flex flex-col justify-around items-center rounded-3xl text-white" >
        <h2 className=' w-fit h-fit text-xl text-orange-900 hover:scale-110 hover:text-sky-700 ' > {name} </h2>
        <img className=' bg-sky-500 w-[80%] h-[65%] animate-rotate-image rounded-3xl ' src={image} alt="Image of pokemon" />
        <div className=' flex flex-col justify-evenly items-start w-full p-2 pl-8 bg-orange-600 text-lg ' >
          <p className=' w-full border-y-2 border-transparent hover:border-black '> {species} </p>
          <p className=' w-full border-y-2 border-transparent hover:border-black '> {captureRate} </p>
          <p className=' w-full border-y-2 border-transparent hover:border-black '> {height} </p>
          <p className=' w-full border-y-2 border-transparent hover:border-black '> {weight} </p>
          <p className=' w-full border-y-2 border-transparent hover:border-black '> {abilities} </p>
        </div>
        <div className=' w-[50%] h-fit flex justify-evenly items-center pb-4 '>
          <span><button onClick={() => addToCatchList(name) } className=' bg-orange-600 rounded-xl text-lg p-2 hover:scale-110 hover:text-sky-500 hover:bg-orange-900 ' >Add to catch list</button></span>
          <span> <button onClick={onClose} className=' bg-orange-600 rounded-xl text-lg p-2 hover:scale-110 hover:text-sky-500 hover:bg-orange-900 ' >Close</button> </span>
        </div>
      </div>
    </div>, document.querySelector("#detailedViewOfPokemon")
  )
}

export default DetailedViewOfPokemon