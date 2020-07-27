import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Is this the end of the world {props.name}?  Yes it is!</p>
            <p>What ever shall we do {props.name}?</p>
        </div>
    )
}

export default userOutput;