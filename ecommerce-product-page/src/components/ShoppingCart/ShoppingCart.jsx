import React, { useState } from "react"

const ShoppingCart = ({isShopCartClicked, children}) => {
    
    return(
        <div className={isShopCartClicked ? " w-80 h-56 bg-slate-50 absolute right-0 -bottom-52" : " hidden"} >
        <h3 className=" border-b-2 h-14 font-bold text-xl flex items-center pl-4 " >Cart</h3>
        {children}
    </div>
    )
}

export default ShoppingCart