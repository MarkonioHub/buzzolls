import React from 'react';
import {useSelector} from "react-redux";

import "./restaurants.sass"

export const Restaurants = () => {
    const restaurants = useSelector(state => state.restaurants.restaurants)

    return (
        <section className="restaurants">
            <div className="restaurants__cont cont">
                <h1 className="restaurants__caption h1">РЕСТОРАНЫ</h1>
                <div className="restaurants__list">
                    {restaurants.map((item, i) =>
                        <li key={i} className="restaurants__item">
                            <img src={item.image} alt="" className="restaurants__image"/>
                            <div className="restaurants__box">
                                <div className="restaurants__address">{item.address}</div>
                                <div className="restaurants__work-time">{item.workTime}</div>
                                <a href={`tel:${item.phone}`} className="restaurants__phone">{item.phone}</a>
                                <div className="restaurants__description">{item.description}</div>
                            </div>
                        </li>
                    )}
                </div>
            </div>
        </section>
    )
}
