import React, {useState} from "react"
import {Link, useLocation} from "react-router-dom"
import {useSelector} from "react-redux"

import './menu-dropdown.sass'

const MenuDropdown = ({ list, parent }) => {
    const currentLocality = useSelector(state => state.localities.currentLocality)
    const location = useLocation()
    const path = location.pathname
    const index = path.lastIndexOf("/")
    const lastUrlSlug = path.slice(index+1, path.length)
    const [isDropdownActive, setIsDropdownActive] = useState(path.includes(parent.slug))

    return (
        <div className={isDropdownActive ? "menu-dropdown menu-dropdown_active" : "menu-dropdown"}>
            <div className="menu-dropdown__box-name" onClick={() => setIsDropdownActive(!isDropdownActive) }>
                <Link to={`/${currentLocality.slug}/menu/${parent.slug}`}
                      className={"menu-dropdown__name link-orange"}>
                    {parent.name}
                </Link>
            </div>
            <div className="menu-dropdown__list">
                {list.map(item =>
                    <Link key={item._id} to={`/${currentLocality.slug}/menu/${parent.slug}/${item.slug}`}
                          className={lastUrlSlug === item.slug ? `menu-dropdown__link menu-dropdown__link_active link-orange` : "menu-dropdown__link link-orange"}>
                        {item.name}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default MenuDropdown;
