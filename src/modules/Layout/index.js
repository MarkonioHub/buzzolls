import React, { Fragment } from 'react';
import { HeaderTop } from './components/HeaderTop/HeaderTop'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ModalLocality } from './components/ModalLocality/ModalLocality'
import { Cookie } from './components/Cookie/Cookie'
import {useSelector} from "react-redux";
import {isObjectEmpty} from "../../helpers/isObjectEmpty"
import {MobileMenu} from "./components/MobileMenu/MobileMenu";

export const Layout = ({children}) => {
    const currentLocality = useSelector(state => state.localities.currentLocality)

    return (
        <Fragment>
            <HeaderTop/>
            <Header/>
            <MobileMenu/>
            {!isObjectEmpty(currentLocality) ?
                <main>{children}</main>
                :
                <div className="empty-page"></div>
            }
            <Footer/>
            <Cookie/>
            <ModalLocality/>
        </Fragment>
    );
};
