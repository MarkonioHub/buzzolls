import React from "react"
import {Link, useLocation} from "react-router-dom"
import { headerMenuList } from "../../consts/headerMenuList"
import {useDispatch, useSelector} from "react-redux"
import { setIsMobileMenuOpen } from "../../../../store/actions/mobileMenuAction"

import logoText from "../../images/logo_text.svg"
import logoIcon from "../../images/logo.svg"
import icCardWhite from "../../images/ic_card_white.svg"

import "./header.sass"

export const Header = () => {
    const currentLocality = useSelector(state => state.localities.currentLocality)
    const dispatch = useDispatch()
    const location = useLocation()
    const path = location.pathname

    return (
        <div className="header">
            <div className="header__cont cont">
                <div className="header__area">
                    <Link to={`/${currentLocality.slug}`} className="header__logo">
                        <img src={ logoIcon } alt="" className="header__logo-icon"/>
                        <img src={ logoText } alt="" className="header__logo-text"/>
                    </Link>
                    <div className="header__menu">
                        {headerMenuList.map((item,i) =>
                            <Link key={i} to={`/${currentLocality.slug}` + item.link}
                                  className={path.includes(item.link) ? "header__menu-link fc_grey link-orange header__menu-link_active" : "header__menu-link fc_grey link-orange"}>
                                {item.text}
                            </Link>
                        )}
                    </div>
                    <Link to={"/"} className="header__basket">
                        <img src={icCardWhite} alt="" className="header__basket-image"/>
                        <span className="header__basket-price">0 ₽</span>
                    </Link>
                    <div className="header__burger" onClick={() => dispatch(setIsMobileMenuOpen(true))}>
                        <div className="header__burger-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
