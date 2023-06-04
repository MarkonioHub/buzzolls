import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import {MenuCell} from "../MenuCell/MenuCell"
import {getProductsByCategory} from "../../../../helpers/getProductsByCategory"
import {setProducts} from "../../../../store/actions/productsAction"
import {useDispatch} from "react-redux"

import "./menu-tile.sass"
import {getCategoriesTree} from "../../../../helpers/getCategoriesTree";

export const MenuTile = () => {
    useEffect(() => {
        if (!products.length) dispatch(setProducts())
    }, [])

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.categories)
    const categoriesTree = getCategoriesTree(categories)
    const { category, subcategory } = useParams()

    let currentCategory
    getCurrentCategory()

    function getCurrentCategory () {
        if (subcategory) {
            categoriesTree.map((cat) => {
                if (cat.children) {
                    const result = cat.children.find(categoryChildren => categoryChildren.slug === subcategory)
                    if (result) currentCategory = result
                }
            })
        } else if (category) {
            currentCategory = categoriesTree.find(item => item.slug === category)
        }
    }

    const products = useSelector(state => state.products.products)
    const currentProducts = getProductsByCategory(currentCategory, products)

    return (
        <div className="menu-tile">
            {/*<h1 className="menu-tile__title h1">Сеты</h1>*/}
            <div className="menu-tile__area">
                {currentProducts.length ? currentProducts.map(product =>
                    <MenuCell product={product} key={product._id}/>
                ) : false}
            </div>
        </div>
    );
};
