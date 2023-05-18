import React from 'react';
import "../css/Button.css"

const Button = ({type , text}) => {
    const handleClick = () => {

    };
    return (
        <button className={type} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;
