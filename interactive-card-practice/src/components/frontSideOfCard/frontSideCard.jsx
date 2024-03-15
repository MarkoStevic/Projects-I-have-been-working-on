import React from 'react'
import "./frontSideCard.css"

const FrontSideCard = ({ cardholderName, cardNumber, expDateMM, expDateYY }) => {
  return (
    <div className='frontSideCard'>
        <div id='whiteCircle'></div>
        <div id='borderCircle'></div>
        <p id='cardNumber'> {cardNumber} </p>
        <p id='cardholderName'> {cardholderName} </p>
        <p id='expDateYear'> {expDateMM}/{expDateYY} </p>
    </div>
  )
}

export default FrontSideCard