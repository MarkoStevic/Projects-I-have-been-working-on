import { useState } from "react"

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditable, setIsEditable] = useState(false)
    const editHandler = () => {
        setIsEditable((prevState) => !prevState)

        if (isEditable) {
            onChangeName(symbol, playerName)
        }

    }
    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name" >{playerName}</span>
    if (isEditable) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }
    return (
        <li className={isActive ? "active" : undefined} >
            <span className="player" >
                {editablePlayerName}
                <span className="player-symbol" > {symbol} </span>
            </span>
            <button onClick={editHandler} > {isEditable ? "Save" : "Edit"} </button>
        </li>
    )


}

export default Player