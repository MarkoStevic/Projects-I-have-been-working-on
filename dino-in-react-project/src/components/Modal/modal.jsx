import { React } from "react";
import { createPortal } from "react-dom"

const Modal = ({ heading, children, onClose, acceptButtonContent, rejectButtonContent }) => {

    return createPortal(
        <div className=" absolute w-full h-[100vh] flex justify-center items-center bg-black bg-opacity-70 ">
            <div className=" w-[40%] h-[70vh] flex flex-col justify-center items-center bg-green-900 p-4 ">
                <header className=" w-full h-[15%] flex justify-between items-start">
                    <h1 className=" text-white text-3xl "> {heading} </h1>
                    <button onClick={onClose} className=" bg-red-700 text-xl px-[4px] py-[2px] rounded-md text-white ">X</button>
                </header>
                <main className=" w-full h-[70%] ">
                    {children}
                </main>
                <footer className=" w-full h-[15%] flex justify-center items-center ">
                    <button> {acceptButtonContent} </button>
                    <button onClick={onClose} className="  w-24 text-xl bg-red-600 text-white rounded cursor-pointer hover:bg-red-800 "> {rejectButtonContent} </button>
                </footer>

            </div>
        </div>, document.querySelector("#modalContainer ")
    )
}

export default Modal