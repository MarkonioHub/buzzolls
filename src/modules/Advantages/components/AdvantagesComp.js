import React from 'react';

import advantages_1 from "../images/advantages_1.png"
import advantages_2 from "../images/advantages_2.png"
import advantages_3 from "../images/advantages_3.png"
import advantages_4 from "../images/advantages_4.png"

import "./advantages.sass"

export const AdvantagesComp = () => {
    return (
        <section className="advantages">
            <div className="advantages__cont cont">
                <h2 className="advantages__title h2">ПРЕИМУЩЕСТВА <br/> BUZZOLLS</h2>
                <ul className="advantages__list">
                    <li className="advantages__item">
                        <picture className="advantages__picture">
                            <img src={advantages_1} alt="" className="advantages__image advantages__image_1"/>
                        </picture>
                        <h3 className="advantages__headline h3">ДОСТАВИМ БЫСТРО!</h3>
                        <div className="advantages__text">
                            Ваш заказ будет доставлен в течение 90 минут
                        </div>
                    </li>
                    <li className="advantages__item">
                        <picture className="advantages__picture">
                            <img src={advantages_2} alt="" className="advantages__image advantages__image_2"/>
                        </picture>
                        <h3 className="advantages__headline h3">С УТРА ДО ВЕЧЕРА!</h3>
                        <div className="advantages__text">
                            Мы принимаем заказы ежедневно <b>c 10:00 до 23:00</b>
                        </div>
                    </li>
                    <li className="advantages__item">
                        <picture className="advantages__picture">
                            <img src={advantages_3} alt="" className="advantages__image advantages__image_3"/>
                        </picture>
                        <h3 className="advantages__headline h3">ОФОРМИМ ПРЕДЗАКАЗ</h3>
                        <div className="advantages__text">
                            и доставим в удобное для вас время
                        </div>
                    </li>
                    <li className="advantages__item">
                        <picture className="advantages__picture">
                            <img src={advantages_4} alt="" className="advantages__image advantages__image_4"/>
                        </picture>
                        <h3 className="advantages__headline h3">ЗАМЕНИМ РОЛЛЫ В СЕТЕ!</h3>
                        <div className="advantages__text">
                            Специально для вас усовершенствуем любой сет :)
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
