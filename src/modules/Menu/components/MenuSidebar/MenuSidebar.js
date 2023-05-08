import React, {Fragment} from 'react';
import MenuLink from "../../../../UI/MenuLink/MenuLink"
import {useSelector} from "react-redux"
import {getCategoriesTree} from "../../../../helpers/getCategoriesTree"

import "./menu-sidebar.sass"
import MenuDropdown from "../../../../UI/MenuDropdown/MenuDropdown";

export const MenuSidebar = () => {
    const categories = useSelector(state => state.categories.categories)
    const categoriesTree = getCategoriesTree(categories)
    const currentLocality = useSelector(state => state.localities.currentLocality)

    return (
        <div className="menu-sidebar">
            <div className="menu-sidebar__list">
                {categoriesTree.map((item) =>
                    <Fragment key={item._id}>
                        {item.children ?
                            <MenuDropdown list={item.children} parent={item} text={item.name} className={'link-orange'}/>
                            :
                            <MenuLink className="mobile-menu__link link-orange" path={`/${currentLocality.slug}/menu/${item.slug}`} text={item.name}/>
                        }
                    </Fragment>
                )}
            </div>
        </div>
    );
};
