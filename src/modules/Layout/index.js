import React, { Fragment } from 'react';
import { HeaderTop } from './components/HeaderTop/HeaderTop'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export const Layout = ({children}) => {
    return (
        <Fragment>
            <HeaderTop/>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </Fragment>
    );
};
