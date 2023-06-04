import React from 'react'
import ButtonOrange from "../../../../UI/ButtonOrange/ButtonOrange"

import "./menu-cell.sass"

export const MenuCell = ({product}) => {
    return (
        <div className="menu-cell">
            {/*<div className="menu-cell__tags">*/}
            {/*    <div className="menu-cell__tag">Выбор клиентов</div>*/}
            {/*    <div className="menu-cell__tag">Курица</div>*/}
            {/*    <div className="menu-cell__tag">Мидии</div>*/}
            {/*    <div className="menu-cell__tag">Форель</div>*/}
            {/*</div>*/}
            <picture className="menu-cell__picture">
                <img src={product.image} alt="" className="menu-cell__image"/>
            </picture>
            <div className="menu-cell__name">{product.name}</div>
            <div className="menu-cell__desc">{product.description}</div>
            <ButtonOrange className="menu-cell__add" text={`Добавить за ${product.price} Р`}></ButtonOrange>
        </div>
    );
};
