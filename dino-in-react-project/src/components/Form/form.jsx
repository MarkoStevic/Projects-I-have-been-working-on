import React, { useState } from "react"
import dinos from "../../resourcesForDino/data.json"

const Select = ({ data, onChange, value }) => {

    return (
        <select value={value} onChange={onChange} className=" w-[30%] text-xl border-2 border-black">
            <option value= "" >Pick a dino </option>
            {data.map((item) => {
                return <option key={Math.random()}> {item.name} </option>
            })}
        </select>
    )
}

const Form = ({ onSubmitForm }) => {

    const [kupac, setKupac] = useState("")
    const [select, setSelect] = useState()
    const [napomena, setNapomena] = useState("/")
    const [cena, setCena] = useState("")
    const [isError, setIsError] = useState(false)
    const [successfulOrder, setSuccessfulOrder] = useState(false)

    const updateKupac = (event) => {
        setKupac(event.target.value)
    }

    const handleOnChange = (event) => {
        setSelect(event.target.value)
        if( event.target.value === "") {
            setCena("")
        } else {
            setCena(dinos.data.find((item) => event.target.value === item.name).cena)
        }
    }

    const updateNapomena = (event) => {
        setNapomena(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (kupac === "" || cena === "") {
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 4000)
        } else {
            setIsError(false)
            setSuccessfulOrder(true)
            setTimeout(() => {
                setSuccessfulOrder(false)
            }, 3000)
            const order = {
                kupac,
                select,
                napomena,
                cena
            }
            onSubmitForm(order)
        }

    }

    return (
        <div className=" w-full h-full">
            <form onSubmit={submitHandler} className=" w-full h-full flex flex-col justify-between items-center " >
                <label htmlFor="kupac" className=" text-xl text-white " >Kupac: <span className=" text-red-500">*</span> </label>
                <input type="text" id="kupac" onChange={updateKupac} className=" w-[30%] text-xl border-2 border-black " />
                <p className={` ${isError ? " text-red-500 block w-fit h-fit p-0 m-0 " : " invisible"}`} >You must fill inputs marked with a *</p>
                <label htmlFor="dino" className=" text-2xl text-white ">Dinosaurus: <span className=" text-red-500">*</span> </label>
                <Select data={dinos.data} value={select} onChange={handleOnChange} />
                <label htmlFor="napomena" className=" text-2xl text-white ">Napomena: </label>
                <textarea rows="5" cols="40" id="napomena" onChange={updateNapomena} className=" border-2 border-black text-lg"></textarea>
                <button type="submit" className=" w-24 text-xl bg-lime-700 text-white rounded cursor-pointer hover:text-black hover:bg-lime-600" >Naruci</button>
                <p className={`${successfulOrder ? "text-green-500 block w-fit h-fit p-0 m-0" : "invisible"}`} >You have successfully made your order</p>
            </form>
        </div>
    )

}

export default Form