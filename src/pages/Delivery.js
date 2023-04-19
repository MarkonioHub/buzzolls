import React from "react";
import { Layout } from "../modules/Layout/index";
import { DeliveryInfo } from "../modules/Delivery";
import { FAQ } from "../modules/FAQ";

const Delivery = () => {
    return (
        <Layout>
            <DeliveryInfo/>
            <FAQ/>
        </Layout>
    );
};

export default Delivery;
