import React, { useState } from "react"
import './App.css';
import Form from './components/Form/form';
import FrontSideCard from './components/frontSideOfCard/frontSideCard';
import BackSideCard from "./components/backSideOfCard/backSideCard";

const data = {
  cardholderName: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  expDateMM: "00",
  expDateYY: "00",
  cvcNumber: "000"
}
function App() {
  const [objData, setObjData] = useState(data)

  const updateObjData = (obj) => {
    setObjData({
      ...objData,
      cardholderName: obj.cardholderName,
      cardNumber: obj.cardNumber,
      expDateMM: obj.expMonth,
      expDateYY: obj.expYear,
      cvcNumber: obj.cvcNumber
    })
  }

  const submitForm = (formData) => {
    updateObjData(formData)
  }
  return (
    <div className="App">
      <section className="gradient-part-of-app"></section>
      <section className='form-section'>
        <Form onSubmitForm={submitForm} />
      </section>
      <FrontSideCard cardholderName={objData.cardholderName} cardNumber={objData.cardNumber} expDateMM={objData.expDateMM} expDateYY={objData.expDateYY} />
      <BackSideCard cvcNumber={objData.cvcNumber} />
    </div>
  );
}

export default App;
