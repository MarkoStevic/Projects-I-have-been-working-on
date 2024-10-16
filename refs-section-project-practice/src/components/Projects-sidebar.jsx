const ProjectsSidebar = ({ projects, addNewProject }) => {

    return (
        <section id="sidebar" className=" h-[100vh] w-[20%] bg-stone-900 rounded-tr-2xl mt-12 flex flex-col gap-y-8 pl-12 pt-20">
            <h2 className=" w-52 h-9 text-2xl font-bold text-stone-300 text-center  bg-stone-900" >YOUR PROJECTS</h2>
            <button onClick={addNewProject} className=" text-stone-400 text-xl w-[9.5rem] h-12 bg-stone-600 p-1 rounded-md" >
                + Add project
            </button>
            <ul className=" w-[70%] h-fit flex flex-col justify-start gap-y-2 ">
                {projects.map((project) => {
                    return (
                        <li className=" text-stone-500">
                            <button>{project}</button>
                        </li>)

                }
                )}

            </ul>
        </section>
    )
}

export default ProjectsSidebar