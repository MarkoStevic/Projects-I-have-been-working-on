import React, { useState } from "react"
import "./form.css"

const Form = ({ onSubmitForm }) => {

    const [cardholderName, setCardholderName] = useState("")
    const [cardNumber, setCardNumber] = useState()
    const [expMonth, setExpMonth] = useState()
    const [expYear, setExpYear] = useState()
    const [cvcNumber, setCvcNumber] = useState()

    const handleNameChange = (event) => {
        setCardholderName(event.target.value)
    }

    const handleCardNumbChange = (event) => {
            setCardNumber(event.target.value)
    }

    const handleExpMonth = (event) => {
        setExpMonth(event.target.value)
    }

    const handleExpYear = (event) => {
        setExpYear(event.target.value)
    }

    const handleCvcNumber = (event) => {
        setCvcNumber(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const formData = {
            cardholderName,
            cardNumber,
            expMonth,
            expYear,
            cvcNumber
        }
        onSubmitForm(formData)
    }
    return (
        <>
            <form className="styling-form" onSubmit={submitHandler}>
                <label for="cHolderName" >CARDHOLDER NAME</label>
                <input id="cHolderName" name="cHolderName" type="text" placeholder="e.g. Jane Appleseed" onChange={handleNameChange} value={cardholderName} required ></input>
                <label>CARD NUMBER</label>
                <input type="text" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" placeholder="e.g. 0000 0000 0000 0000" maxLength="19" onChange={handleCardNumbChange} required></input>
                <div className="expDateAndCvcLabel">
                    <label id="expDateLabel">EXP. DATE (MM/YY)</label>
                    <label id="cvcLabel">CVC</label>
                </div>
                <div className="expDateAndCvcInput">
                    <input id="monthsInput" type="number" placeholder="MM" max="12" min="1" onChange={handleExpMonth} required />
                    <input id="yearsInput" type="number" placeholder="YY" onChange={handleExpYear} required />
                    <input id="cvcInput" type="number" placeholder="e.g. 123" onChange={handleCvcNumber} required />
                </div>
                <input id="submit" type="submit" value="Confirm" />
            </form >
        </>
    )
}

export default Form