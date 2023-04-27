import React, { useEffect } from "react";
import {BrowserRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLocalities} from "../store/actions/localitiesAction";

import AppRouter from "./AppRouter";

import './style/index.sass';
import './fonts/AFuturaRound.woff'
import './fonts/AFuturaRound.woff2'
import './fonts/AFuturaRoundBold.woff'
import './fonts/AFuturaRoundBold.woff2'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLocalities())
    }, [])

    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
}

export default App;
