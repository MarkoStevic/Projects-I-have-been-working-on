import { renderLaunches } from "../../rendering/renderingLaunches";
const filter = document.querySelector(".filters")
const main = document.querySelector(".main")
export const Search = (launches) => {
    const inputSearch = document.createElement("input")
    inputSearch.type = "text"
    inputSearch.placeholder = "Search by a mission name..."
    filter.appendChild(inputSearch)

    inputSearch.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            main.textContent = ""

            const result = launches.filter((item) =>
                item.mission_name.toLowerCase().includes(event.target.value.toLowerCase())
            )
                renderLaunches(result)
        }
    })

}
