import { getLocalities } from '../../api/localities'
import { SET_LOCALITIES, SET_CURRENT_LOCALITIES, IS_LOCALITIES_MODAL_OPEN } from "../slices/localitiesSlice";

export const setLocalities = () => {
    return async dispatch => {
        try {
            const localities = await getLocalities()
            dispatch(SET_LOCALITIES(localities))
        } catch (e) {
            console.log(e)
        }
    }
}

export const setCurrentLocality = (newLocality) => {
    return dispatch => {
        dispatch(SET_CURRENT_LOCALITIES(newLocality))
        localStorage.setItem("city", JSON.stringify(newLocality))
    }
}

export const setIsLocalitiesModalOpen = (isOpen) => {
    return dispatch => {
        dispatch(IS_LOCALITIES_MODAL_OPEN(isOpen))
    }
}
