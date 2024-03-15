const main = document.querySelector(".main")

export const renderLaunches = (launches) => {
    launches.forEach((item) => {
        const divLaunch = document.createElement("div")
        divLaunch.classList.add("divLaunch")

        const pFlightNumber = document.createElement("p")
        pFlightNumber.textContent = "Flight number: " + item.flight_number

        const pMissionName = document.createElement("p")
        pMissionName.textContent = "Mission name: " + item.mission_name

        const pLaunchYear = document.createElement("p")
        pLaunchYear.textContent = "Launch year: " + item.launch_year

        const pDetails = document.createElement("p")
        pDetails.textContent = "Details: " + item.details

        divLaunch.append(pFlightNumber, pMissionName, pLaunchYear, pDetails)
        main.appendChild(divLaunch)
    })
}