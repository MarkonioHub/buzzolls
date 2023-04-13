import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import './style/index.sass';
import './fonts/AFuturaRound.woff'
import './fonts/AFuturaRound.woff2'
import './fonts/AFuturaRoundBold.woff'
import './fonts/AFuturaRoundBold.woff2'

function App() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
}

export default App;
