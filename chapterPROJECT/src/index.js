import { getAllLaunches, getNextLaunch, getUpcomingLaunches } from "./service"
import { renderLaunches } from "./components/rendering/renderingLaunches"
import { getPastLaunches } from "./service"
import { selectByMissionName } from "./components/filters/select/selectMissionName"
import { renderLaunchesByLaunchSuccess } from "./components/filters/radioButton/radioButton"
import { Search } from "./components/filters/Search/searchBar"
import { Loader } from "./components/Loader/loader"

import "../asset/css/style.css"

const main = document.querySelector(".main")
const filter = document.querySelector(".filters")
const divAllLaunches = document.querySelector(".allLaunches")
const divPastLaunches = document.querySelector(".pastLaunches")
const divUpcomingLaunches = document.querySelector(".upcomingLaunch")
const divNextLaunch = document.querySelector(".nextLaunch")
const divSingleLaunch = document.querySelector(".singleLaunch")

const fetchingAllLaunches = async () => {
    const loader = Loader()
    main.appendChild(loader)
    try {
        setTimeout(async () => {
            const response = await getAllLaunches()
            main.textContent = ""
            renderLaunches(response.data)
            renderLaunchesByLaunchSuccess(response.data)
            Search(response.data)
        }, 2000)

    } catch (error) {
        const pError = document.createElement("h1")
        pError.textContent = "There is no next launch in our database"
        pError.style.color = "#f00"
        main.appendChild(pError)
    }
}
fetchingAllLaunches()

divAllLaunches.addEventListener("click", () => {
    main.textContent = ""
    filter.textContent = ""
    fetchingAllLaunches()
})

divPastLaunches.addEventListener("click", async () => {
    main.textContent = ""
    filter.textContent = ""
    try {
        const response = await getPastLaunches()
        renderLaunches(response.data)
        renderLaunchesByLaunchSuccess(response.data)

    } catch (error) {
        const pError = document.createElement("h1")
        pError.textContent = "There is no next launch in our database"
        pError.style.color = "#f00"
        main.appendChild(pError)
    }

})

divUpcomingLaunches.addEventListener("click", async () => {
    main.textContent = ""
    filter.textContent = ""
    try {
        const response = await getUpcomingLaunches()
        renderLaunches(response.data)

    } catch (error) {
        const pError = document.createElement("h1")
        pError.textContent = "There is no next launch in our database"
        pError.style.color = "#f00"
        main.appendChild(pError)
    }

})

divNextLaunch.addEventListener("click", async () => {
    main.textContent = ""
    filter.textContent = ""
    try {
        const response = await getNextLaunch()
        renderLaunches(response.data)

    } catch (error) {
        const pError = document.createElement("h1")
        pError.textContent = "There is no next launch in our database"
        pError.style.color = "#f00"
        main.appendChild(pError)
    }
})

divSingleLaunch.addEventListener("click", async () => {
    main.textContent = ""
    filter.textContent = ""
    try {
        const response = await getAllLaunches()
        selectByMissionName(response.data)
    } catch (error) {
        const pError = document.createElement("h1")
        pError.textContent = "There is no launch in our database"
        pError.style.color = "#f00"
        main.appendChild(pError)
    }
})