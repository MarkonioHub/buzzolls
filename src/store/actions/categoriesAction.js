import {getCategories} from "../../api/categories";
import {SET_CATEGORIES} from "../slices/categoriesSlice";

export const setCategories = () => {
    return async dispatch => {
        try {
            const categories = await getCategories()
            dispatch(SET_CATEGORIES(categories))
        } catch (e) {
            console.log(e)
        }
    }
}
