import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useParams, useNavigate} from "react-router-dom";
import {setCurrentLocality, setIsLocalitiesModalOpen} from "../../../../store/actions/localitiesAction";
import {setRestaurants} from "../../../../store/actions/restaurantsAction";

import './modal-locality.sass'

export const ModalLocality = () => {
    const isLocalitiesModalOpen = useSelector(state => state.localities.isLocalitiesModalOpen)
    const localities = useSelector(state => state.localities.localities)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate();
    const { city } = useParams()

    useEffect(() => {
        const existCity = localities.find(item => item.slug === city)
        if (existCity) {
            dispatch(setCurrentLocality(existCity))
            dispatch(setRestaurants(existCity._id))
            dispatch(setIsLocalitiesModalOpen(false))
        } else {
            const storageCity = JSON.parse(localStorage.getItem("city"))
            if (storageCity) {
                dispatch(setCurrentLocality(storageCity))
                dispatch(setRestaurants(storageCity._id))
                navigate(`/${storageCity.slug}`)
            } else {
                dispatch(setIsLocalitiesModalOpen(true))
            }
        }
    },[location])

    return (
        <div className={isLocalitiesModalOpen ? "modal-locality modal-locality_open" : "modal-locality"}>
            <div className="modal-locality__layer"></div>
            <div className="modal-locality__area">
                <div className="modal-locality__title">ВЫБЕРИТЕ ГОРОД</div>
                <div className="modal-locality__list">
                    {localities.map((item, i) =>
                        <div key={i} className="modal-locality__item">
                            <div className="modal-locality__name">{item.name}</div>
                            <Link to={`/${item.slug}`} className="modal-locality__link link-orange">Выбрать</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
