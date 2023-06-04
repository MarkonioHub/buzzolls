import React, {useEffect, Fragment} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setCategories} from "../../../../store/actions/categoriesAction"
import MenuLink from "../../../../UI/MenuLink/MenuLink"
import { footerMenuList } from "../../consts/footerMenuList"
import {Link, useLocation} from "react-router-dom"
import {setIsMobileMenuOpen} from "../../../../store/actions/mobileMenuAction"
import {getCategoriesTree} from "../../../../helpers/getCategoriesTree"
import MenuDropdown from "../../../../UI/MenuDropdown/MenuDropdown"

import "./mobile-menu.sass"

import ic_close_mobile_menu from "../../images/ic_close_mobile_menu.svg"

export const MobileMenu = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const path = location.pathname
    const index = path.lastIndexOf("/")
    const lastUrlSlug = path.slice(index+1, path.length)

    const categories = useSelector(state => state.categories.categories)
    const categoriesTree = getCategoriesTree(categories)
    const currentLocality = useSelector(state => state.localities.currentLocality)
    const isMobileMenuOpen = useSelector(state => state.mobileMenu.isMobileMenuOpen)

    useEffect( () => {
        if (!categories.length) dispatch(setCategories())
    }, [])

    useEffect(() => {
        dispatch(setIsMobileMenuOpen(false))
    },[location])

    return (
        <Fragment>
            <div className={isMobileMenuOpen ? "mobile-menu mobile-menu_active" : "mobile-menu"}>
                <div className="mobile-menu__area">
                    <button className="mobile-menu__close" onClick={() => dispatch(setIsMobileMenuOpen(false))}>
                        <img src={ic_close_mobile_menu} alt="" className="mobile-menu__close-icon"/>
                    </button>
                    {footerMenuList.map((item, i) =>
                        <Fragment key={i}>
                            <Link to={`/${currentLocality.slug}` + item.link}
                                  className={lastUrlSlug === item.link ? "mobile-menu__link mobile-menu__link_active menu-link fc_grey link-orange" : "mobile-menu__link menu-link fc_grey link-orange"}>
                                {item.text}
                            </Link>
                                {i === 1 ?
                                    <div className="mobile-menu__box">
                                        {categoriesTree.map((item) =>
                                            <Fragment key={item._id}>
                                                {item.children ?
                                                    <MenuDropdown list={item.children} parent={item} text={item.name}/>
                                                    :
                                                    <MenuLink className={lastUrlSlug === item.slug ? "mobile-menu__link mobile-menu__link_active link-orange" : "mobile-menu__link link-orange"} path={`/${currentLocality.slug}/menu/${item.slug}`} text={item.name}/>
                                                }
                                            </Fragment>
                                        )}
                                    </div>
                                : false}
                        </Fragment>
                    )}
                </div>
            </div>
            <div className="mobile-menu-layer" onClick={() => dispatch(setIsMobileMenuOpen(false))}></div>
        </Fragment>
    );
};
