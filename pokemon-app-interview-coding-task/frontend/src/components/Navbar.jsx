import React from 'react'
import { NavLink } from "react-router"

const Navbar = () => {

  return (
    <nav className = " w-full flex justify-evenly items-center text-2xl bg-sky-900 py-2 text-gray-300 opacity-70 ">
         <NavLink to= '/' className={({ isActive }) => isActive ? "bg-slate-900 opacity-100 rounded-2xl text-cyan-300 py-2 px-3 " : "hover:bg-slate-900 opacity-100 rounded-2xl hover:text-cyan-300 py-2 px-3" } > All pokemons </NavLink>

         <NavLink to= '/catchList' className={({ isActive }) => isActive ? "bg-slate-900 opacity-100 rounded-2xl text-cyan-300 py-2 px-3 " : "hover:bg-slate-900 opacity-100 rounded-2xl hover:text-cyan-300 py-2 px-3" } > Catch list </NavLink> 
    </nav>
  )
}

export default Navbar