import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import MainContext from "../context/MainContext";
import RecipeCard from "../components/RecipeCard";

const Favourites = () => {

    const {favourites}=useContext(MainContext);
    const recipes=useSelector((state)=> state.recipes.value);
    const favRecipes=recipes.filter(r=>favourites.includes(r.id))


    return (
        <div className={'favourites flex wrap left'}>
            {favRecipes.map((r,i)=><RecipeCard recipeId={r.id} key={i}/>)}

        </div>
    );
};

export default Favourites;