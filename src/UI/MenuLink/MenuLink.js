import React from "react";

import './menu-link.sass'
import {Link} from "react-router-dom";

const MenuLink = ({ className, path, text }) => {
    return (
        <Link to={path} className={className ? `menu-link ${className}` : "menu-link"}>{text}</Link>
    );
};

export default MenuLink;
