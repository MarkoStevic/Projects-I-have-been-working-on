import { useState, useEffect } from "react"
import axios from "axios"


import MainLayout from "./components/mainLayout";
import PokemonCard from "./components/PokemonCard";
import DetailedViewOfPokemon from "./components/detailedViewOfPokemon";
import Loader from "./components/Loader";

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [pokemonDetailsObj, setPokemonDetailsObj] = useState({})
  const [noDataError, setNoDataError] = useState(false)
  const [loader, setLoader] = useState(true)
  const [serverResponse, setServerResponse] = useState("")

  const numOfPokePerPage = 50

  useEffect(() => {
    const fetchData = async () => {

      try {
        // Fetching all 200 pokemons
        const allPokemonsList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
        const pokemonsListData = await allPokemonsList.json()

        // Creating array of promises and looping through, to get data we need
        const allPokemonsPromises = pokemonsListData.results.map(async (pokemon) => {
          const pokemonUrls = await fetch(pokemon.url)
          const pokemonUrlsData = await pokemonUrls.json()

          const speciesUrls = await fetch(pokemonUrlsData.species.url)
          const speciesUrlsData = await speciesUrls.json()

          const pokemonAbilitiesUrls = await fetch(pokemonUrlsData.abilities[0].ability.url)
          const pokemonAbilitiesUrlsData = await pokemonAbilitiesUrls.json()

          return {
            name: "Name: " + pokemonUrlsData.name,
            image: pokemonUrlsData.sprites.other["official-artwork"].front_default,
            species: "Species: " + speciesUrlsData.name,
            captureRate: "Capture rate: " + speciesUrlsData.capture_rate,
            height: "Height: " + pokemonUrlsData.height,
            weight: "Weight: " + pokemonUrlsData.weight,
            abilities: "Abilities: " + pokemonAbilitiesUrlsData.effect_entries[1].short_effect
          }


        })

        const allPokemonData = await Promise.all(allPokemonsPromises)
        setPokemons(allPokemonData)
        setNoDataError(false)

      } catch (error) {
        error = console.log("No data");
        setNoDataError(true)

      } finally {
        setLoader(false)
      }
    }
    fetchData()
  }, [])

  const startIndex = (currentPage - 1) * numOfPokePerPage
  const currentPokemons = pokemons.slice(startIndex, startIndex + numOfPokePerPage)

  const totalPages = Math.ceil(pokemons.length / numOfPokePerPage)

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const showDetailsHandler = (name) => {
    setShowDetailsModal(true)
    document.body.classList.add("overflow-y-hidden")
    setPokemonDetailsObj(pokemons.find((onePoke) => {
      if (onePoke.name === name) {
        return {
          ...pokemonDetailsObj,
          name: onePoke.name,
          image: onePoke.image,
          species: onePoke.species,
          captureRate: onePoke.captureRate,
          height: onePoke.height,
          weight: onePoke.weight,
          abilities: onePoke.abilities
        }
      }
    }))
  }

  const closeDetailsHandler = () => {
    setShowDetailsModal(false)
    document.body.classList.remove("overflow-y-hidden")
  }

  const handleAddToCatchList = async (name) => {
    let addToCatchList = {}
    pokemons.find((onePoke) => {
      if (onePoke.name === name) {
        addToCatchList = {
          name: onePoke.name,
          species: onePoke.species,
          image: onePoke.image
        }
      }
    })

    try {
      const response = await axios.post("http://localhost:8080/api/catchList", addToCatchList)
      console.log("Response from the server: ", response.data);
      setServerResponse(response.data)

    } catch (error) {
      console.error("Error sending data", error);

    }

  }

  return (
    <>
      {showDetailsModal ? <DetailedViewOfPokemon onClose={closeDetailsHandler} addToCatchList={handleAddToCatchList}
        {...pokemonDetailsObj} /> : null}
      <MainLayout
        onPrevious={() => handlePageChange(currentPage - 1)}
        onNext={() => handlePageChange(currentPage + 1)}
        disabledPrev={currentPage === 1}
        disabledNext={currentPage === totalPages}
        current={currentPage}
        total={totalPages} >

        {noDataError ? <div className=' w-full h-[100vh] text-7xl text-red-600 flex justify-center items-center '>
          UNABLE TO FETCH DATA
        </div> : null}
        {loader ? <Loader /> : null}

        {currentPokemons.map((poke) => (
          <PokemonCard key={poke.name} {...poke} showDetails={showDetailsHandler} addToCatchList={handleAddToCatchList} />
        ))}

      </MainLayout>
    </>
  )
}

export default App
