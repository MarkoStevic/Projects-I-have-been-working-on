import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'

import MainLayout from '../components/mainLayout'
import CatchListCard from '../components/CatchListCard'
import Loader from '../components/Loader'

const CatchList = () => {
  const [catchList, setCatchList] = useState([])
  const [noDataError, setNoDataError] = useState(false)
  const [loader, setLoader] = useState(true)
  console.log(catchList);

  useEffect(() => {

    const fetchCatchList = async () => {

      try {
        const response = await axios.get("http://localhost:8080/api/catchList")
        
        setCatchList(response.data)

      } catch (error) {
        console.error("Data can't be fetched.", error);
        setNoDataError(true)

      } finally {
        setLoader(false)
      }
    }

    fetchCatchList()
  }, [])


  return (
    <MainLayout>
      {noDataError ? <div className=' w-full h-[100vh] text-7xl text-red-600 flex justify-center items-center ' >
        UNABLE TO FETCH DATA
      </div> : null}
      {loader ? <Loader /> : null }

      {catchList.length === 0 ? <span className=" text-6xl rounded-xl bg-orange-800 p-3 text-orange-500  "  >Add some pokemons into catch list</span> : null }
      
      {catchList.map((poke) => (
        <CatchListCard key={poke.name} {...poke} />
      ))}

    </MainLayout>
  )
}

export default CatchList