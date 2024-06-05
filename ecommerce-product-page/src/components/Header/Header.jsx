import React, { useState } from "react"
import shCartIcon from "../../images/icon-cart.svg"
import avatarImage from "../../images/image-avatar.png"
import logo from "../../images/logo.svg"
import List from "../helper/listComponent"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

const Header = () => {
    const [numItemsInCart, setNumItemsInCart] = useState(0)
    const [isShopCartOpen, setIsShopCartOpen] = useState(false)
    return (
        <section className=" w-[80%] h-28 m-auto border-b-2 flex items-center justify-between relative " >
            <nav className=" w-fit h-full flex items-center gap-x-6 " >
                <h1 > <a href="#"> <img src={logo} alt="logo"></img> </a> </h1>
                <ul className=" h-full flex items-center gap-x-6 font-semibold text-gray-400 " >
                    <List navigationItem= "Collections" />
                    <List navigationItem= "Men" />
                    <List navigationItem= "Women" />
                    <List navigationItem= "About" />
                    <List navigationItem= "Contact" />
                </ul>
            </nav>
            <div onClick={() => setIsShopCartOpen((prevState) => { return !prevState })} className=" w-fit h-fit flex items-center gap-x-10 pr-10 " >
                <div className=" relative cursor-pointer " >
                    <img src={shCartIcon} alt="shCartIcon" className=" w-6 h-6" ></img>
                    <span className={` ${numItemsInCart ? " absolute bottom-4 left-3 bg-orange-500 rounded-xl w-6 h-4 text-xs flex justify-center items-center " : null} `}   > {numItemsInCart} </span>
                </div >
                <div className=" rounded-full border-2 hover:border-2 hover:border-orange-500 cursor-pointer " >
                    <img src={avatarImage} alt="avatarImage" className=" w-12 h-12" ></img>
                </div>
            </div>
            <ShoppingCart isShopCartClicked={isShopCartOpen} />
        </section>
    )
}

export default Header