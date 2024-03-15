import React from "react";
import "./backSideCard.css"

const BackSideCard = ( {cvcNumber} ) => {
    return(
        <div className="backSideCard">
            <p id="cvcNumber"> {cvcNumber} </p>
        </div>
    )
}

export default BackSideCard