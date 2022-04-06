import React from "react";
import '../styles/board-style.css'

function Card (props) {
    const {insideText, id, clicked, checkClick} = props
    return(
        <div className="card" onClick={() => checkClick(id, clicked)} style={{backgroundColor: insideText}}>
        </div>
    )
}

export default Card