import React from "react";
import { Layout } from "../modules/Layout/index";
import { RestaurantsModule } from "../modules/RestaurantsList";

const Restaurants = () => {
    return (
        <Layout>
            <RestaurantsModule/>
        </Layout>
    );
};

export default Restaurants;
