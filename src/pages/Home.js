import React from "react";
import { Layout } from "../modules/Layout/index";
import { MainInfo } from "../modules/MainInfo/index";
import { Advantages } from "../modules/Advantages/index";
import { OurMenu } from "../modules/OurMenu/index";
import { Slider } from "../modules/Slider/index";

const Home = () => {
    return (
        <Layout>
            <Slider/>
            <OurMenu/>
            <Advantages/>
            <MainInfo/>
        </Layout>
    );
};

export default Home;
