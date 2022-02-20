import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import MainContext from "../context/MainContext";

const Header = () => {

    const nav=useNavigate();
    const {favourites, currentId, location, setLocation}=useContext(MainContext);

    const recipes=useSelector((state)=> state.recipes.value);
    const recipe=recipes.find(r=>r.id===currentId);

    return (
        <div className={'top-header'}>
            <h2>YourCookingAssistant</h2>

            {location==='main' && <h1>Recipes</h1>}
            {location==='favourites' && <h1>Favourites</h1>}
            {location==='create' && <h1>Create new Recipe</h1>}
            {location==='singleRecipe' && <h1 style={{maxWidth: '55%', maxHeight: '100%', overflow: 'hidden'}}>In details: {recipe.title}</h1>}

            <div className={'flex gap'}>

                {location!=='main' &&
                    <button onClick={() => {
                        nav('/');
                        setLocation('main')
                    }}>Main</button>}

                {(favourites.length>0 && location!=='favourites') &&
                    <button onClick={() => {
                        nav('/favourites');
                        setLocation('favourites')
                    }}>Favourites ({favourites.length})</button>}

                {location!=='create' &&
                    <button onClick={() => {
                        nav('/create');
                        setLocation('create')
                }}>Create Recipe</button>}

            </div>

        </div>
    );
};

export default Header;