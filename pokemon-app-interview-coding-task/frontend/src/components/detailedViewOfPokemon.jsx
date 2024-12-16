import React from 'react'
import { createPortal } from "react-dom"

const DetailedViewOfPokemon = ({ onClose, name, image, species, captureRate, height, weight, abilities }) => {
  return createPortal(
    <div className=' fixed w-full h-[100%] flex justify-center items-center bg-black opacity-80 text-white ' >
      <div className=" w-[60%] h-[85vh] flex flex-col justify-around items-center bg-red-700 " >
        <h2> {name} </h2>
        <img src={image} alt="Image of pokemon" />
        <div>
          <span> {species} </span>
          <span> {captureRate} </span>
          <span> {height} </span>
          <span> {weight} </span>
          <span> {abilities} </span>
        </div>
        <div>
          <span><button>Add to catch list</button></span>
          <span> <button onClick={onClose} >Close</button> </span>
        </div>
      </div>
    </div>, document.querySelector("#detailedViewOfPokemon")
  )
}

export default DetailedViewOfPokemon