import { getAllCountries } from "../../../service";
import RenderCountries from "../../RenderCountries";

const filterByRegions = () => {
    const regionSelect = document.createElement("select")
    const opt0 = document.createElement("option")
    opt0.textContent = "Select by region"
    opt0.value = "all"
    const opt1 = document.createElement("option")
    opt1.textContent = "Africa"
    opt1.value = "Africa"
    const opt2 = document.createElement("option")
    opt2.textContent = "Americas"
    opt2.value = "Americas"
    const opt3 = document.createElement("option")
    opt3.textContent = "Europe"
    opt3.value = "Europe"
    const opt4 = document.createElement("option")
    opt4.textContent = "Asia"
    opt4.value = "Asia"
    const opt5 = document.createElement("option")
    opt5.textContent = "Oceania"
    opt5.value = "Oceania"
    regionSelect.append(opt0, opt1, opt2, opt3, opt4, opt5)

    regionSelect.addEventListener("change", async (event) => {
        try {
            const response = await getAllCountries()
            if (event.target.value == "all") {
                RenderCountries(response.data)
            } else {
                const result = response.data.filter((item) => item.region == event.target.value)
                RenderCountries(result)
            }

        } catch (error) {
            //eslint-disable-next-line no-console
            console.log(error);
        }
    })

    return regionSelect
}

export default filterByRegions