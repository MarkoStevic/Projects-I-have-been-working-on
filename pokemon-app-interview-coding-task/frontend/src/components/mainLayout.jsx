import bckgrndImg from "../assets/pokemon-background.jpg"
import Navbar from "./Navbar"

const MainLayout = ({ children, onPrevious, onNext, disabledPrev, disabledNext, current, total }) => {
  return (
    <div style={{ backgroundImage: `url(${bckgrndImg})` }} className=' W-[100%] h-[100vh] bg-no-repeat bg-cover bg-center flex flex-col justify-start items-center '>
      <Navbar />
      <div className=" w-full h-[80vh] flex justify-start items-center flex-wrap "> {children} </div>
      <div>
          <button onClick={onPrevious} disabled={disabledPrev} > Previous</button>
          <span>Page {current} of {total} </span>
          <button onClick={onNext} disabled={disabledNext} > Next</button>
        </div>
    </div>
  )
}

export default MainLayout