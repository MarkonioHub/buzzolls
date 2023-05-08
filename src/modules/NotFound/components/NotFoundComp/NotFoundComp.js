import React from "react";
import {Link} from "react-router-dom";

import "./not-found.sass"

export const NotFoundComp = () => {
    return (
        <div className="not-found">
            <div className="not-found__cont cont">
                <div className="not-found__caption">404</div>
                <div className="not-found__text">Страница не найдена</div>
                <Link to={"/"} className="not-found__link">на главную</Link>
            </div>
        </div>
    );
};
