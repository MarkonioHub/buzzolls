import {getSlides} from "../../api/slides";
import {SET_SLIDES} from "../slices/slidesSlice";

export const setSlides = () => {
    return async dispatch => {
        try {
            const slides = await getSlides()
            dispatch(SET_SLIDES(slides))
        } catch (e) {
            console.log(e)
        }
    }
}
