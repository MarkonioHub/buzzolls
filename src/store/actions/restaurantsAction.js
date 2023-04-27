import {getRestaurants} from "../../api/restaurants";
import {SET_RESTAURANTS} from "../slices/restaurantsSlice";

export const setRestaurants = (localityId) => {
    return async dispatch => {
        try {
            const restaurants = await getRestaurants(localityId)
            dispatch(SET_RESTAURANTS(restaurants))
        } catch (e) {
            console.log(e)
        }
    }
}
