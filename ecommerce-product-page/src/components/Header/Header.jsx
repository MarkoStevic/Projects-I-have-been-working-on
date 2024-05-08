import React, { useState } from "react"
import shCartIcon from "../../images/icon-cart.svg"
import avatarImage from "../../images/image-avatar.png"
import logo from "../../images/logo.svg"

const Header = () => {
    const [numItemsInCart, setNumItemsInCart] = useState(0) 
    return(
        <section className=" w-[80%] h-28 m-auto border-b-2 flex items-center justify-between " >
            <div className=" w-fit h-full flex items-center gap-x-6 " >
                <h1 > <a href="#"> <img src={logo} alt="logo"></img> </a> </h1>
                <ul className=" h-full flex items-center gap-x-6 font-semibold text-gray-400 " >
                    <li className=" h-full flex items-center border-b-4 border-b-transparent  hover:border-b-4 hover:border-b-orange-500 " ><a href="#" >Collections</a></li>
                    <li className=" h-full flex items-center border-b-4 border-b-transparent hover:border-b-4 hover:border-b-orange-500 " ><a href="#">Men</a></li>
                    <li className=" h-full flex items-center border-b-4 border-b-transparent hover:border-b-4 hover:border-b-orange-500 " ><a href="#">Women</a></li>
                    <li className=" h-full flex items-center border-b-4 border-b-transparent hover:border-b-4 hover:border-b-orange-500 " ><a href="#">About</a></li>
                    <li className=" h-full flex items-center border-b-4 border-b-transparent hover:border-b-4 hover:border-b-orange-500 " ><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className=" w-fit h-fit flex items-center gap-x-10 " >
               <div className=" relative cursor-pointer " >
               <img src={shCartIcon} alt="shCartIcon" className=" w-6 h-6" ></img>
               <span className=" absolute bottom-4 left-3 bg-orange-500 rounded-xl w-6 h-4 text-xs flex justify-center items-center " > {numItemsInCart} </span>
                </div> 
                <div className=" rounded-full border-2 hover:border-2 hover:border-orange-500" >
                <img src={avatarImage} alt="avatarImage" className=" w-12 h-12" ></img>
                </div>
            </div>
        </section>
    )
}

export default Header