import React, {useState} from "react";

import { faqContent } from "../../const/faqContent"

import "./faq.sass"

export const FaqComp = () => {
    const [arrayActiveItems, setArrayActiveItems] = useState([])

    function toggleItem (i) {
        if (arrayActiveItems.includes(i)) {
            setArrayActiveItems(arrayActiveItems.filter(item => item !== i))
        } else {
            arrayActiveItems.push(i)
            setArrayActiveItems(oldArray => [...oldArray, i]);
        }
    }

    return (
        <section className="faq">
            <div className="faq__cont cont">
                <div className="faq__list">
                    {faqContent.map((item, i) =>
                        <div className="faq__item" key={i}>
                            <button
                                    className={`faq__toggle ${arrayActiveItems.includes(i) ? 'faq__toggle_active' : false}`}
                                    onClick={() => toggleItem(i)}>
                                {item.question}
                            </button>
                            <div className="faq__content">
                                <div className="content" dangerouslySetInnerHTML={{__html: item.answer}}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
