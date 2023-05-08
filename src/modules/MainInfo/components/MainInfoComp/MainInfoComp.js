import React, {useState} from 'react';
import ButtonOrange from '../../../../UI/ButtonOrange/ButtonOrange'

import "./main-info.sass"

export const MainInfoComp = () => {
    const [contentShow, setContentShow] = useState(false)

    return (
        <section className="main-info">
            <div className="main-info__cont cont">
                <div className={`main-info__area ${contentShow ? "main-info__area_show" : false}`}>
                    <div className="content">
                        <h3>ДОСТАВКА РОЛЛОВ</h3>
                        <p>
                            Diam quam nulla porttitor massa. Diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla. Laoreet id donec ultrices tincidunt arcu non sodales. Commodo viverra
                            maecenas accumsan lacus vel facilisis. Quis risus sed vulputate odio ut. Amet tellus
                            cras adipiscing enim eu turpis. Egestas congue quisque egestas diam. Purus semper eget
                            duis at tellus at urna condimentum. Diam quam nulla porttitor massa id neque aliquam
                            vestibulum morbi. Sed turpis tincidunt id aliquet risus feugiat. Sed euismod nisi porta
                            lorem mollis.
                        </p>
                        <p>
                            Diam quam nulla porttitor massa. Diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla. Laoreet id donec ultrices tincidunt arcu non sodales. Commodo viverra
                            maecenas accumsan lacus vel facilisis.
                        </p>
                        <p>
                            Diam quam nulla porttitor massa. Diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla. Laoreet id donec ultrices tincidunt arcu non sodales. Commodo viverra
                            maecenas accumsan lacus vel facilisis.
                        </p>
                        <h3>ЗАКАЗАТЬ РОЛЛЫ — В BUZZOLLS!</h3>
                        <p>
                            Velit ut tortor pretium viverra suspendisse. Ultrices sagittis orci a scelerisque purus
                            semper eget duis. Turpis egestas sed tempus urna.
                        </p>
                        <ul>
                            <li>Ultrices sagittis orci a scelerisque purus semper eget duis. Turpis egestas sed tempus urna.</li>
                            <li>Diam quam nulla porttitor massa.</li>
                            <li>Velit ut tortor pretium viverra suspendisse.</li>
                            <li>Ultrices sagittis orci a scelerisque purus semper eget duis. Turpis egestas sed tempus urna.</li>
                            <li>Diam quam nulla porttitor massa.</li>
                            <li>Velit ut tortor pretium viverra suspendisse.</li>
                            <li>Ultrices sagittis orci a scelerisque purus semper eget duis. Turpis egestas sed tempus urna.</li>
                            <li>Diam quam nulla porttitor massa.</li>
                            <li>Velit ut tortor pretium viverra suspendisse.</li>
                            <li>Ultrices sagittis orci a scelerisque purus semper eget duis. Turpis egestas sed tempus urna.</li>
                            <li>Diam quam nulla porttitor massa.</li>
                            <li>Velit ut tortor pretium viverra suspendisse.</li>
                        </ul>
                        <p>
                            Velit ut tortor pretium viverra suspendisse. Ultrices sagittis orci a scelerisque purus
                            semper eget duis. Turpis egestas sed tempus urna.
                        </p>
                        <p>
                            Diam quam nulla porttitor massa. Diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla. Laoreet id donec ultrices tincidunt arcu non sodales. Commodo viverra
                            maecenas accumsan lacus vel facilisis.
                        </p>
                        <h3>ДОСТАВКА ЕДЫ</h3>
                        <p>
                            Velit ut tortor pretium viverra suspendisse. Ultrices sagittis orci a scelerisque purus
                            semper eget duis. Turpis egestas sed tempus urna.
                        </p>
                        <p>Velit ut tortor:</p>
                        <ul>
                            <li>velit ut tortor</li>
                            <li>pretium viverra</li>
                            <li>suspendisse</li>
                            <li>sagittis</li>
                            <li>eget</li>
                            <li>semper</li>
                        </ul>
                        <p>
                            Velit ut tortor pretium viverra suspendisse. Ultrices sagittis orci a scelerisque purus
                            semper eget duis. Turpis egestas sed tempus urna.
                        </p>
                        <p>
                            Diam quam nulla porttitor massa. Diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla.
                        </p>
                        <p>
                            Diam quam nulla porttitor massa. Diam phasellus vestibulum lorem sed risus ultricies
                            tristique nulla.
                        </p>
                    </div>
                </div>
                <div className="main-info__button-box">
                    <ButtonOrange
                        text={contentShow ? "Скрыть текст" : "Показать текст"}
                        onClick={() => setContentShow(!contentShow)}
                    >
                    </ButtonOrange>
                </div>
            </div>
        </section>
    )
}
