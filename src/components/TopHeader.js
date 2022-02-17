import React from 'react';
import {useNavigate} from "react-router-dom";

const TopHeader = () => {

    const nav=useNavigate();

    return (
        <div className={'top-header'}>
            <h2>CookingRage</h2>
            <h1>Receptai</h1>
            <div className={'flex gap'}>
                <button onClick={()=>{nav('/')}}>Visi</button>
                <button onClick={()=>{nav('/favourites')}}>Megiamiausi</button>
                <button onClick={()=>{nav('/create')}}>Sukurti nauja</button>
            </div>

        </div>
    );
};

export default TopHeader;