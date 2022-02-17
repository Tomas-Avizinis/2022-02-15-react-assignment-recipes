import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import MainContext from "../context/MainContext";
import RecipeCard from "../components/RecipeCard";

const Favourites = () => {

    const {favourites}=useContext(MainContext);
    const recipes=useSelector((state)=> state.recipes.value);
    const favRecipes=recipes.filter(r=>favourites.includes(r.id))


    return (
        <div>
            <h1> Megiami receptaia</h1>
            <div className={'flex wrap overflow'}>
                {favRecipes.map((r,i)=><RecipeCard recipe={r} key={i}/>)}
            </div>
        </div>
    );
};

export default Favourites;