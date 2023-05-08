import {SET_IS_MOBILE_MENU_OPEN} from "../slices/mobileMenuSlice"

export const setIsMobileMenuOpen = (value) => {
    return async dispatch => {
        try {
            dispatch(SET_IS_MOBILE_MENU_OPEN(value))
        } catch (e) {
            console.log(e)
        }
    }
}
