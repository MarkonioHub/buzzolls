import React, {Fragment} from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

import "./our-menu.sass"

export const OurMenuComp = () => {
    const categories = useSelector(state => state.categories.categories)
    const currentLocality = useSelector(state => state.localities.currentLocality)

    return (
        <section className="our-menu">
            <div className="our-menu__cont cont">
                <h2 className="our-menu__title h2">НАШЕ МЕНЮ</h2>
                <div className="our-menu__list">
                    {categories.map((item, i) =>
                        <Fragment key={i}>
                            {item.image ?
                                <Link to={`/${currentLocality.slug}/menu/${item.slug}`} className="our-menu__link">
                                    <img src={item.image} alt="" className="our-menu__image"/>
                                    <div className="our-menu__name">{item.name}</div>
                                </Link>
                                :
                                false
                            }
                        </Fragment>
                    )}
                </div>
            </div>
        </section>
    )
}
