const NewProjectForm = ({ title, description, date }) => {
    return (
        <section className=" w-[80%] h-[100vh] flex justify-center items-center " >
            <form className=" w-[70%] h-[70%] flex flex-col justify-center gap-y-2 " >
                <div className=" w-[100%] h-fit flex justify-end gap-x-4 " >
                    <button className=" text-xl rounded-lg w-24 hover:bg-stone-400 " >Cancel</button>
                    <button className=" text-xl bg-stone-900 text-stone-300 p-2 rounded-lg w-24 hover:bg-black " >Save</button>
                </div>

                <label htmlFor="title" className=" text-2xl font-bold text-stone-600 " >TITLE</label>
                <input type="text" value={title} id="title" className=" h-12 text-2xl p-2 bg-stone-200 mb-4
                focus:outline-none focus:border-b-4 focus:border-b-stone-600 " />
                <label htmlFor="description" className=" text-2xl font-bold text-stone-600 " >DESCRIPTION</label>
                <textarea rows={4} cols={30} id="description" className=" h-20 text-2xl p-2 bg-stone-200 mb-4 focus:outline-none focus:border-b-4 focus:border-b-stone-600 " ></textarea>
                <label htmlFor="date" className=" text-2xl font-bold text-stone-600 " >DUE DATE</label>
                <input type="date" value={date} id="date" className=" h-12 text-2xl p-2 bg-stone-200 mb-4 focus:outline-none focus:border-b-4 focus:border-b-stone-600 " />
            </form>
        </section>
    )
}

export default NewProjectForm