import React from 'react';

const Validation = (props) => {
    let validationMessage = "Good to go!"

    if (props.lettercount <= 5)
        validationMessage = "Text to short!"
        
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
};

export default Validation;