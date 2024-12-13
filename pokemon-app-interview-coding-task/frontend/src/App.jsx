
import { useState, useEffect } from "react"
import MainLayout from "./components/mainLayout";
import PokemonCard from "./components/PokemonCard";


function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

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


          return {
            name: pokemonUrlsData.name,
            image: pokemonUrlsData.sprites.other["official-artwork"].front_default,
            species: speciesUrlsData.name,
            captureRate: speciesUrlsData.capture_rate
          }


        })

        const allPokemonData = await Promise.all(allPokemonsPromises)
        setPokemons(allPokemonData)

      } catch (error) {
        error = console.log("No data");

      }
    }
    fetchData()
  }, [])

  const startIndex = (currentPage - 1) * numOfPokePerPage
  const currentPokemons = pokemons.slice(startIndex, startIndex + numOfPokePerPage)

  const totalPages = Math.ceil(pokemons.length / numOfPokePerPage)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <MainLayout onPrevious={() => handlePageChange(currentPage - 1)} onNext={() => handlePageChange(currentPage + 1)} disabledPrev={currentPage === 1} disabledNext={currentPage === totalPages} current={currentPage} total={totalPages} >
        {currentPokemons.map((poke) => (
          <PokemonCard key={poke.name} {...poke} />
        ))}
      </MainLayout>
    </>
  )
}

export default App
