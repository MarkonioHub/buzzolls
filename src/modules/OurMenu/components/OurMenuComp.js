import React, {useState} from 'react';
import {Link} from "react-router-dom";

import "./our-menu.sass"

export const OurMenuComp = () => {
    const [menu, setMenu] = useState([
        {name: 'Сеты'},{name: 'Роллы'},{name: 'Суши и гунканы'},{name: 'Гарниры'},{name: 'Десерты'},
        {name: 'Салаты'},{name: 'Воки'},{name: 'Для детей'},{name: 'Другие товары'}
    ])

    return (
        <section className="our-menu">
            <div className="our-menu__cont cont">
                <h2 className="our-menu__title h2">НАШЕ МЕНЮ</h2>
                <div className="our-menu__list">
                    {menu.map((item, i) =>
                        <Link key={i} to={"/"} className="our-menu__link">
                            <img src="https://buzzolls.ru/static/media/combo.c7880fe0.png" alt="" className="our-menu__image"/>
                            <div className="our-menu__name">{item.name}</div>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}
