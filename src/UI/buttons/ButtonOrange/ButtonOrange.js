import React from "react";

import './button-orange.sass'

const ButtonOrange = ({ onClick, text }) => {
    return (
        <button className="button-orange" type="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonOrange;
