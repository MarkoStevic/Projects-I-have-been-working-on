import bckgrndImg from "../assets/pokemon-background.jpg"
import Navbar from "./Navbar"

const MainLayout = ({ children, onPrevious, onNext, disabledPrev, disabledNext, current,total }) => {
  return (
    <div style={{ backgroundImage: `url(${bckgrndImg})` }} className=' W-[100%] h-fit bg-no-repeat bg-cover bg-center flex flex-col justify-start items-center gap-y-7 '>
      <Navbar />
      <div className=" w-full h-fit flex justify-center items-center flex-wrap px-8 pt-9 "> {children} </div>
      <div className=" w-fit h-fit flex justify-center items-center gap-x-4 text-xl m-8 p-2 rounded-xl bg-orange-700
      text-sky-300 ">
          <button onClick={onPrevious} disabled={disabledPrev} className=" hover:scale-y-125 hover:scale-x-110 hover:text-black " > Previous</button>
          <span>Page {current} of {total} </span>
          <button onClick={onNext} disabled={disabledNext} className=" hover:scale-y-125 hover:scale-x-110 hover:text-black " > Next</button>
        </div>
    </div>
  )
}

export default MainLayout