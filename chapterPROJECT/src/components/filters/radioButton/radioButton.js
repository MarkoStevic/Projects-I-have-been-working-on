// import { getAllLaunches } from "../../../service"
import { renderLaunches } from "../../rendering/renderingLaunches"
const main = document.querySelector(".main")
const filter = document.querySelector(".filters")
export const renderLaunchesByLaunchSuccess = (launches) => {
    const divRadioButtons = document.createElement("div")

    const pSuccessful = document.createElement("p")
    pSuccessful.textContent = "Successful launches: "

    const radioButtonYes = document.createElement("input")
    radioButtonYes.type = "radio"
    radioButtonYes.name = "success_status"
    radioButtonYes.value = true

    pSuccessful.appendChild(radioButtonYes)

    const pUnsuccessful = document.createElement("p")
    pUnsuccessful.textContent = "Unsuccessful launches: "

    const radioButtonNo = document.createElement("input")
    radioButtonNo.type = "radio"
    radioButtonNo.name = "success_status"
    radioButtonNo.value = false

    pUnsuccessful.appendChild(radioButtonNo)

    const pAll = document.createElement("p")
    pAll.textContent = "All: "

    const radioButtonAll = document.createElement("input")
    radioButtonAll.type = "radio"
    radioButtonAll.name = "success_status"

    pAll.appendChild(radioButtonAll)

    divRadioButtons.append(pSuccessful, pUnsuccessful, pAll)
    filter.appendChild(divRadioButtons)

    radioButtonYes.addEventListener("click", () => {
        main.textContent = ""
        const result = launches.filter(item => item.launch_success == true)
        if (result) {
            renderLaunches(result)
        }
        else {
            const pError = document.createElement("h1")
            pError.textContent = "There is no next launch in our database"
            pError.style.color = "#f00"
            main.appendChild(pError)
        }
    })

    radioButtonNo.addEventListener("click", () => {
        main.textContent = ""
        const result = launches.filter(item => item.launch_success == false)
        if (result) {
            renderLaunches(result)
        }
        else {
            const pError = document.createElement("h1")
            pError.textContent = "There is no next launch in our database"
            pError.style.color = "#f00"
            main.appendChild(pError)
        }
    })

    pAll.addEventListener("click", () => {
        main.textContent = ""
        renderLaunches(launches)
    })
}