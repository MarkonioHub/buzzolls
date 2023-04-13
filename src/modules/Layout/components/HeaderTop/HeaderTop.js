import React, {useEffect, useState} from 'react';
import { getLocalities } from '../../api/localities'
import './header-top.sass'

export const HeaderTop = () => {
    const [localities, setLocalities] = useState([])

    useEffect(  () => {
        async function storeLocalities () {
            const localities = await getLocalities()
            setLocalities(localities)
        }
        storeLocalities()
    }, []);

    return (
        <div className="header-top">
            <div className="header-top__cont cont">
                <div className="header-top__area">
                    <div className="header-top__city">
                        <h1 className="header-top__city-span">Быстрая доставка роллов </h1>
                        <button className="header-top__city-name">Киров</button>
                    </div>
                    <a href={`tel:${localities[0]?.phone}`} className="header-top__phone fc_grey link-orange">8 (833) 269 96 90</a>
                    <div className="header-top__work-time fc_grey">ежедневно с 10:00 до 23:00</div>
                    <div className="header-top__sign-in">
                        <div className="header-top__sign-in-icon"></div>
                        <span className="header-top__sign-in-span fc_grey">
                            Регистрация/Вход
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
