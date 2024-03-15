import { renderLaunches } from "../../rendering/renderingLaunches"

const filter = document.querySelector(".filters")
const main = document.querySelector(".main")

export const selectByMissionName = (launches) => {
    const select = document.createElement("select")
    const defaultOption = document.createElement("option")
    defaultOption.textContent = "Select mission name"
    defaultOption.value = "default"
    defaultOption.selected = true
    defaultOption.disabled = true
    select.appendChild(defaultOption)
    filter.appendChild(select)
    launches.forEach((item) => {
        const option = document.createElement("option")
        option.textContent = item.mission_name
        option.value = item.mission_name

        select.append(option)
    });

    select.addEventListener("change", () => {
        main.textContent = ""
        const result = launches.filter(item => item.mission_name == select.value)
        if (result) {
            renderLaunches(result)
        }
    })
} 
