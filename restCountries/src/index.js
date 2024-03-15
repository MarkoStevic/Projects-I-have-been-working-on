import { getAllCountries } from "./service"
import RenderCountries from "./components/RenderCountries/index.js"
import Search from "./components/Filters/Search"
import RegionSelect from "./components/Filters/RegionSelect"
import { extractRegions } from "./helper/regions"
import Loader from "./components/Loader"
import Header from "./components/Header"

import "../asset/css/style.css"

const renderFilters = (data) => {
    const allRegions = extractRegions(data)
    const filters = document.querySelector(".filters")
    const search = Search(data)
    const regionSelect = RegionSelect(allRegions)
    filters.append(search, regionSelect)
}

const fetchAllCountries = async () => {
    const main = document.querySelector(".country-selection")
    const loader = Loader()
    main.appendChild(loader)
    try {
        setTimeout(async () => {
            const response = await getAllCountries()
            renderFilters(response.data)
            // // eslint-disable-next-line no-console
            // console.log(response)
            RenderCountries(response.data)
        }, 2000)
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
    }
}

// const fetchSingleCountry = async (name) => {
//     try {
//         const response = await getSingleCountry(name)
//         // eslint-disable-next-line no-console
//         console.log(response)

//         RenderCountries(response.data)
//     } catch (error) {
//         // eslint-disable-next-line no-console
//         console.log(error)
//     }
// }

// DRUGI NACIN
// getSingleCountry("Serbia")
//     .then((response) => {
//         //eslint-disable-next-line no-console
//         console.log(response.data)
//     })
//     .catch((error) => {
//         //eslint-disable-next-line no-console
//         console.log(error)
//     })

Header()
fetchAllCountries()
// fetchSingleCountry("serbia")

// const fetchCountryRegion = async (region) => {
//     try {
//         const response = await getCountryRegions(region)
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchCountryRegion("Europe")

// const fetchCountriesByLanguage = async(language) => {
//     try {
//         const response = await getCountriesByLanguage(language)
//         console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchCountriesByLanguage("Serbian")

// const fetchCountryByCapital = async(capital) => {
//     try {
//         const response = await getCountryByCapital(capital)
//         console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchCountryByCapital("Belgrade")