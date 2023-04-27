import React from 'react';

import "./restaurants.sass"

export const Restaurants = () => {
    const restaurants = [1,2,3,4]

    return (
        <section className="restaurants">
            <div className="restaurants__cont cont">
                <h1 className="restaurants__caption h1">РЕСТОРАНЫ</h1>
                <div className="restaurants__list">
                    {restaurants.map((item, i) =>
                        <li key={i} className="restaurants__item">
                            <img src="" alt="" className="restaurants__image"/>
                            <div className="restaurants__box">
                                <div className="restaurants__address">Ленина, 205</div>
                                <div className="restaurants__work-time">10:00 - 23:00</div>
                                <a href="tel:+78332699690" className="restaurants__phone">+78332699690</a>
                                <div className="restaurants__description">
                                    Ресторан находится в торговом центре Грин Хаус на 3 этаже.
                                </div>
                            </div>
                        </li>
                    )}
                </div>
            </div>
        </section>
    )
}
