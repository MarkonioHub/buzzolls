import React from 'react';
import { footerMenuList } from "../../consts/footerMenuList";
import {Link} from "react-router-dom";
import {isObjectEmpty} from "../../../../helpers/isObjectEmpty"

import logoText from "../../images/logo_text.svg";
import icIn from "../../images/ic_in.svg";
import icVk from "../../images/ic_vk.svg";
import icTg from "../../images/ic_tg.svg";
import icGooglePlay from "../../images/ic_google_play.svg";
import icAppStore from "../../images/ic_app_store.svg";

import "./footer.sass"
import {useSelector} from "react-redux";

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
                                <Link to={item.link} key={item.text} className="footer__link link-orange">{item.text}</Link>
                            )}
                        </div>
                        <div className="footer__localities">
                            <div className="footer__title">Киров</div>
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
                                <a href="tel:8(833)2699690" className="footer__contacts-value link-orange">8 (833) 269 96 90</a>
                            </div>
                            <div className="footer__contacts-box">
                                <div className="footer__contacts-name">Вопросы и предложения:</div>
                                <a href="mailto:feedback@buzzolls.ru" className="footer__contacts-value link-orange">feedback@buzzolls.ru</a>
                            </div>
                            <div className="footer__contacts-box">
                                <div className="footer__contacts-name">Сотрудничество:</div>
                                <a href="mailto:director@buzzolls.ru" className="footer__contacts-value link-orange">director@buzzolls.ru</a>
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
                            © 2015-2023 Доставка суши, ресторан японской кухни
                        </div>
                    </div>
                    <div className="footer__social-box">
                        <div className="footer__social-list">
                            <a href="https://t.me/buzzolls" target="_blank" rel="noreferrer" className="footer__social-link">
                                <img src={icIn} alt="" className="footer__social-image"/>
                            </a>
                            <a href="https://vk.com/buzzolls" target="_blank" rel="noreferrer" className="footer__social-link">
                                <img src={icVk} alt="" className="footer__social-image"/>
                            </a>
                            <a href="https://t.me/buzzolls" target="_blank" rel="noreferrer" className="footer__social-link">
                                <img src={icTg} alt="" className="footer__social-image"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer__app-box">
                        <div className="footer__app-list">
                            <a href="https://play.google.com/store/apps/details?id=ru.buzzolls"
                               className="footer__app-link" target="_blank" rel="noreferrer">
                                <img src={icGooglePlay} alt="" className="footer__app-image"/>
                            </a>
                            <a href="https://apps.apple.com/ru/app/buzzolls/id1449958213"
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
