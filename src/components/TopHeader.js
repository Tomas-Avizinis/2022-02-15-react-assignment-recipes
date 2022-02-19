import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import MainContext from "../context/MainContext";

const TopHeader = () => {

    const nav=useNavigate();
    const {favourites}=useContext(MainContext);


    return (
        <div className={'top-header'}>
            <h2>CookingRage</h2>
            <h1>Receptai</h1>
            <div className={'flex gap'}>
                <button onClick={()=>{nav('/')}}>Main</button>
                {favourites.length>0 && <button onClick={() => {nav('/favourites')}}>Favourites ({favourites.length})</button>}
                <button onClick={()=>{nav('/create')}}>Create Recipe</button>
            </div>

        </div>
    );
};

export default TopHeader;