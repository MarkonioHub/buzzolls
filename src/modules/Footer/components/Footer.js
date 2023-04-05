import React from 'react';
import { menuList } from "../consts/menuList";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__cont cont">
                {menuList.map(item =>
                    <div key={item.text}>{item.text}</div>
                )}
            </div>
        </footer>
    );
};
