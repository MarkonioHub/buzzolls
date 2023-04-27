import React from 'react';

import "./stock.sass"

export const Stock = () => {
    return (
        <section className="stock">
            <div className="stock__cont cont">
                <h1 className="stock__caption h1">АКЦИИ</h1>
                <div className="stock__empty">акций нет</div>
            </div>
        </section>
    )
}
