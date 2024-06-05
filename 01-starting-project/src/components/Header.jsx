import reactImg from "../assets/react-core-concepts.png"

const reactDescriptions = ["Fundamental", "Crucial", "Core"]
const genRandomInt = (arr) => {
  return Math.floor(Math.random() * arr.length)
}

const Header = () => {

    const description = reactDescriptions[genRandomInt(reactDescriptions)]
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }

  export default Header