import React from "react"

const Order = ( {buyer, important, dino, price, onDelete} ) => {
    return(
        <div className=" flex flex-col justify-start items-center w-full border-b-2 border-solid my-4 pb-5  text-xl">
       <p>Kupac: {buyer} </p>
       <p>Dinosaurus: {dino} </p>
       <p>Napomena: {important} </p>
       <p>Cena: {price} </p>
       <button onClick={ () => onDelete(buyer) } className=" bg-red-700 rounded-xl p-1" >Delete</button>

        </div>
    )
}

export default Order