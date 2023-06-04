import {getProducts} from "../../api/products";
import {SET_PRODUCTS} from "../slices/productsSlice";

export const setProducts = () => {
    return async dispatch => {
        try {
            const products = await getProducts()
            dispatch(SET_PRODUCTS(products))
        } catch (e) {
            console.log(e)
        }
    }
}
