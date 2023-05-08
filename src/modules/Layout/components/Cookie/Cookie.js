import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

import "./cookie.sass"
import ButtonOrange from "../../../../UI/ButtonOrange/ButtonOrange";

export const Cookie = () => {
    const currentLocality = useSelector(state => state.localities.currentLocality)
    const [isCookieAccepted, setIsCookieAccepted] = useState("")

    useEffect( () => {
        const storageIsCookieAccepted = localStorage.getItem("cookieAccepted")
        setIsCookieAccepted(storageIsCookieAccepted)
    })

    function cookieAccepted () {
        localStorage.setItem("cookieAccepted", "true")
        setIsCookieAccepted("true")
    }

    return (
        <div>
            {!isCookieAccepted ?
                <div className="cookie">
                    <div className="cookie__box">
                        <p className="cookie__text">
                            Мы используем cookies. Продолжая работу с сайтом вы
                            принимаете <Link to={`/${currentLocality.slug}/policy`} className="cookie__link">
                            условия обработки персональных данных
                        </Link>
                        </p>
                        <ButtonOrange className="cookie__button" text={"принять"} onClick={() => cookieAccepted()}></ButtonOrange>
                    </div>
                </div>
                :
                false
            }
        </div>
    );
};
