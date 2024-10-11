import { useState } from "react"

import Header from "./components/Header"
import UserInputs from "./components/UserInputsSection"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})

const inputIsValid = userInput.duration >= 1

const handleChange = (inputIdentifier, newValue) => {
  setUserInput(prevUserInput => {
      return{
          ...prevUserInput,
          [inputIdentifier] : +newValue
      }
  })
}

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChange={handleChange} />
      {inputIsValid ? <Results input={userInput} /> : <p className="center" >Please, enter the duration that is greater than zero.</p> }
    </>

  )
}

export default App
