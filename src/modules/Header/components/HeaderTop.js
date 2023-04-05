import React, {useEffect, useState} from 'react';
import { getLocalities } from '../api/localities'

export const HeaderTop = () => {
    const [localities, setLocalities] = useState([])

    useEffect(  () => {
        async function storeLocalities () {
            const localities = await getLocalities()
            setLocalities(localities)
            console.log(localities)
        }
        storeLocalities()
    }, []);

    return (
        <header className="header">
            <div className="header__cont cont">
                {localities.map(item =>
                    <div key={item.name}>{item.name}</div>
                )}
            </div>
        </header>
    );
};
