import React, {useCallback, useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {setSlides} from "../../../../store/actions/slidesAction";

import ic_slider_right_white from "../../images/ic_slider_right_white.svg"

import "./slider.sass"

export const SliderComp = () => {
    const dispatch = useDispatch()
    const slides = useSelector(state => state.slides.slides)

    useEffect(() => {
        if (!slides.length) dispatch(setSlides())
    }, [])

    const [activeIndex, setActiveIndex] = useState(0)

    const nextSlide = useCallback(() => {
        if (activeIndex === slides.length - 1) {
            setActiveIndex(0)
        } else {
            setActiveIndex((prevActiveIndex) => prevActiveIndex + 1)
        }
    }, [activeIndex, slides])

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000);

        return () => clearInterval(interval);
    }, [nextSlide]);

    function prevSlide () {
        if (activeIndex === 0) {
            setActiveIndex(slides.length - 1)
        } else {
            setActiveIndex((prevActiveIndex) => prevActiveIndex - 1)
        }
    }

    return (
        <section className="slider">
            <div className="slider__wrap">
                <div className="slider__cont cont">
                    <button className="slider__nav slider__nav_left" type="button" onClick={prevSlide}>
                        <img className="slider__nav-icon" src={ic_slider_right_white} alt=""/>
                    </button>
                    <button className="slider__nav slider__nav_right" type="button" onClick={nextSlide}>
                        <img className="slider__nav-icon" src={ic_slider_right_white} alt=""/>
                    </button>
                    <div className="slider__pagination">
                        {slides.map((item, i) =>
                            <button key={i} className={`slider__pagination-button 
                                    ${activeIndex === i ? "slider__pagination-button_active" : false}`}
                                    type="button" onClick={() => setActiveIndex(i)}>
                                <div className="slider__pagination-icon"></div>
                            </button>
                        )}
                    </div>
                </div>
                <div className="slider__list">
                    {slides.map((item, i) =>
                        <picture key={i} className={`slider__picture ${activeIndex === i ? "slider__picture_active" : false}`}>
                            <source srcSet={item.mobile} media="(max-width: 768px)"/>
                            <source srcSet={item.tablet} media="(max-width: 1024px)"/>
                            <img src={item.desctop} alt="" className="slider__image"/>
                        </picture>
                    )}
                </div>
            </div>
        </section>
    )
}
