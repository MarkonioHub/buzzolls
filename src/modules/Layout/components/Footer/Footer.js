import React from 'react';
import { footerMenuList } from "../../consts/footerMenuList";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isObjectEmpty} from "../../../../helpers/isObjectEmpty"

import logoText from "../../images/logo_text.svg";
import icIn from "../../images/ic_in.svg";
import icVk from "../../images/ic_vk.svg";
import icTg from "../../images/ic_tg.svg";
import icGooglePlay from "../../images/ic_google_play.svg";
import icAppStore from "../../images/ic_app_store.svg";

import "./footer.sass"

export const Footer = () => {
    const currentLocality = useSelector(state => state.localities.currentLocality)
    const restaurants = useSelector(state => state.restaurants.restaurants)

    return (
        <footer className="footer">
            <div className="footer__cont cont">
                {!isObjectEmpty(currentLocality) ?
                    <div className="footer__area">
                        <div className="footer__list">
                            {footerMenuList.map(item =>
                                <Link to={`/${currentLocality.slug}${item.link}`} key={item.text} className="footer__link link-orange">{item.text}</Link>
                            )}
                        </div>
                        <div className="footer__localities">
                            <div className="footer__title">{currentLocality.name}</div>
                            <ul className="footer__locality-list">
                                {restaurants.map((item, i) =>
                                    <li key={i} className="footer__locality-item">{item.address}</li>
                                )}

                            </ul>
                        </div>
                        <div className="footer__contacts">
                            <h3 className="footer__title">Контакты</h3>
                            <div className="footer__contacts-box">
                                <div className="footer__contacts-name">Горячая линия:</div>
                                <a href="tel:8(888)88886888" className="footer__contacts-value link-orange">8 (888) 888 88 88</a>
                            </div>
                            <div className="footer__contacts-box">
                                <div className="footer__contacts-name">Вопросы и предложения:</div>
                                <a href="mailto:mail@mail.ru" className="footer__contacts-value link-orange">mail@mail.ru</a>
                            </div>
                            <div className="footer__contacts-box">
                                <div className="footer__contacts-name">Сотрудничество:</div>
                                <a href="mailto:mail@mail.ru" className="footer__contacts-value link-orange">mail@mail.ru</a>
                            </div>
                        </div>
                    </div>
                    :
                    false
                }
                <div className="footer__bottom">
                    <div className="footer__logo-box">
                        <Link to={"/"} className="footer__logo">
                            <img src={logoText} alt="" className="footer__logo-text"/>
                        </Link>
                    </div>
                    <div className="footer__copyright-box">
                        <div className="footer__copyright">
                            © 2023 Копия сайта buzzolls
                        </div>
                    </div>
                    <div className="footer__social-box">
                        <div className="footer__social-list">
                            <a href="#" target="_blank" rel="noreferrer" className="footer__social-link">
                                <img src={icIn} alt="" className="footer__social-image"/>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" className="footer__social-link">
                                <img src={icVk} alt="" className="footer__social-image"/>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" className="footer__social-link">
                                <img src={icTg} alt="" className="footer__social-image"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer__app-box">
                        <div className="footer__app-list">
                            <a href="#"
                               className="footer__app-link" target="_blank" rel="noreferrer">
                                <img src={icGooglePlay} alt="" className="footer__app-image"/>
                            </a>
                            <a href="#"
                               className="footer__app-link" target="_blank" rel="noreferrer">
                                <img src={icAppStore} alt="" className="footer__app-image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
