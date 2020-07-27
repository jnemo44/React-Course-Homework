import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="userInput">
            <p>Enter your information below</p>
            <input className="userInput" type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default userInput;