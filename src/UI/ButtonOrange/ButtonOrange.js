import React from "react";

import './button-orange.sass'

const ButtonOrange = ({ className, onClick, text }) => {
    return (
        <button className={className ? `button-orange ${className}` : "button-orange"} type="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonOrange;
