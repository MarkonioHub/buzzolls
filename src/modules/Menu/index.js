import React from 'react';
import { MenuSidebar } from './components/MenuSidebar/MenuSidebar'
import { MenuTile } from './components/MenuTile/MenuTile'

import "./index.sass"

export const MenuModule = () => {
    return (
        <section className="menu">
            <div className="menu__cont cont">
                <div className="menu__wrap">
                    <MenuSidebar/>
                    <MenuTile/>
                </div>
            </div>
        </section>
    );
};
