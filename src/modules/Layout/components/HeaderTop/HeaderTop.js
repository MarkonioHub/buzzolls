import React, {useEffect} from 'react'
import {Link, useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {setIsLocalitiesModalOpen} from "../../../../store/actions/localitiesAction";
import {isObjectEmpty} from "../../../../helpers/isObjectEmpty"

import './header-top.sass'

export const HeaderTop = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const currentLocality = useSelector(state => state.localities.currentLocality)

    useEffect(() => {
        window.scrollTo(0, 0);
    },[location])

    return (
        <div className="header-top">
            <div className="header-top__cont cont">
                <div className="header-top__area">
                    {!isObjectEmpty(currentLocality) ?
                        <div className="header-top__city">
                            <h1 className="header-top__city-span">Быстрая доставка роллов </h1>
                            <button className="header-top__city-name" onClick={() => dispatch(setIsLocalitiesModalOpen(true))}>
                                {currentLocality.name}
                            </button>
                        </div> : false
                    }
                    {currentLocality.phone ?
                        <a href={`tel:${currentLocality.phone}`} className="header-top__phone fc_grey link-orange">{currentLocality.phone}</a>
                        :
                        false
                    }
                    <div className="header-top__work-time fc_grey">ежедневно с 10:00 до 23:00</div>
                    <Link to={"/"} className="header-top__sign-in">
                        <div className="header-top__sign-in-icon"></div>
                        <span className="header-top__sign-in-span fc_grey">
                            Регистрация/Вход
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
