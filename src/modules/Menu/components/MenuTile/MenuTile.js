import React from 'react'
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import {MenuProduct} from "../MenuProduct/MenuProduct"

import "./menu-tile.sass"

export const MenuTile = () => {
    const categories = useSelector(state => state.categories.categories)
    const { category, subcategory } = useParams()
    let currentCategory
    if (subcategory) {
        currentCategory = categories.find(item => item.slug === subcategory)
    } else if (category) {
        currentCategory = categories.find(item => item.slug === category)
    }
    return (
        <div className="menu-tile">
            <h1 className="menu-tile__title h1">Сеты</h1>
            <div className="menu-tile__area">
                {[1,2,3,4,5].map(item =>
                    <MenuProduct/>
                )}
            </div>
        </div>
    );
};
