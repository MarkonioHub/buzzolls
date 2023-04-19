import React from "react";

import ic_delivery_1 from "../../images/ic_delivery_1.png"
import ic_delivery_2 from "../../images/ic_delivery_2.png"
import ic_delivery_3 from "../../images/ic_delivery_3.png"
import ic_delivery_4 from "../../images/ic_delivery_4.png"

import "./delivery.sass"

export const DeliveryComp = () => {
    return (
        <section className="delivery">
            <div className="delivery__cont cont">
                <h1 className="delivery__caption h1">ДОСТАВКА</h1>
                <div className="delivery__list">
                    <div className="delivery__item">
                        <img src={ic_delivery_1} alt="" className="delivery__icon"/>
                        <div className="delivery__box">
                            <h2 className="delivery__title">Часы работы</h2>
                            <p className="delivery__text">
                                Мы принимаем заказы <span className="delivery__orange">с&nbsp;10:00&nbsp;до&nbsp;23:00</span>
                                <br/>
                                без перерывов и выходных
                            </p>
                        </div>
                    </div>
                    <div className="delivery__item">
                        <img src={ic_delivery_2} alt="" className="delivery__icon"/>
                        <div className="delivery__box">
                            <h2 className="delivery__title">Доставим быстро</h2>
                            <p className="delivery__text">
                                Мы не хотим, чтобы голод портил вам настроение,
                                поэтому&nbsp;стараемся доставлять ваши заказы максимально быстро <br/>
                                Среднее время доставки в будние дни
                                составляет <span className="delivery__orange">до 60 минут</span> <br/>
                                В выходные дни и часы пик она может
                                продлится <span className="delivery__orange">до 90 минут</span>
                            </p>
                        </div>
                    </div>
                    <div className="delivery__item">
                        <img src={ic_delivery_3} alt="" className="delivery__icon"/>
                        <div className="delivery__box">
                            <h2 className="delivery__title">Бесплатная доставка</h2>
                            <p className="delivery__text">
                                Минимальная сумма заказа для бесплатной
                                доставки - <span className="delivery__orange">400 руб</span>
                            </p>
                        </div>
                    </div>
                    <div className="delivery__item">
                        <img src={ic_delivery_4} alt="" className="delivery__icon"/>
                        <div className="delivery__box">
                            <button className="delivery__button-map" type="button">
                                Карта районов доставки
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
