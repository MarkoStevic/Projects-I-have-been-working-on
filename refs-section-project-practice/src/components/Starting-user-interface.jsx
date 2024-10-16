import noProjectImage from "../assets/no-projects.png"

const StartingUserInterface = ({ createNewProject }) => {
    return (
        <section className=" w-[80%] h-[100vh] flex flex-col justify-center items-center gap-y-7">
            <img src={noProjectImage} alt="noProjectImage" className=" w-24 h-24" />

            <span className=" text-3xl text-stone-700 font-bold" >
                No Project Selected
            </span>

            <span className=" text-2xl text-gray-700 opacity-60 font-semibold  " >
                Select a project or get started with a new one
            </span>

            <span>
                <button onClick={createNewProject} className=" text-xl bg-stone-800 text-stone-400 p-3 rounded-lg " >
                    Create new project
                </button>
            </span>
        </section>
    )
} 

export default StartingUserInterface