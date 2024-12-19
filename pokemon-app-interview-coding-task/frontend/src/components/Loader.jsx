import React from 'react'

const Loader = () => {
    return (
        <div className=" w-[90%] h-[90vh] flex items-center justify-center " >
            <div className=' w-56 h-56 rounded-full border-4 border-white bg-orange-700 animate-ping ' >
            </div>
        </div>
    )
}

export default Loader