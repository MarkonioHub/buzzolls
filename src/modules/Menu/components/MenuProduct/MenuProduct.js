import React from 'react'
import ButtonOrange from "../../../../UI/ButtonOrange/ButtonOrange"
import {Link} from "react-router-dom"

import "./menu-product.sass"

export const MenuProduct = ({product}) => {

    return (
        <Link to={"/"} className="menu-product">
            <div className="menu-product__tags">
                <div className="menu-product__tag">Выбор клиентов</div>
                <div className="menu-product__tag">Курица</div>
                <div className="menu-product__tag">Мидии</div>
                <div className="menu-product__tag">Форель</div>
            </div>
            <picture className="menu-product__picture">
                <img src={"https://filestorage.buzzolls.ru/Img/Products/Combo/View/04D9F5BC52F5861D11ED246D2777ECE0.jpg"} alt="" className="product__image"/>
            </picture>
            <div className="menu-product__name">Япоша</div>
            <div className="menu-product__desc">1225 гр., 48 шт. К сету прилагается: 3 порции соевого...</div>
            <ButtonOrange className="menu-product__add" text={"Добавить за 289 Р"}></ButtonOrange>
        </Link>
    );
};
