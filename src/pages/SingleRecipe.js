import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import RecipeCardBig from "../components/RecipeCardBig";
import MainContext from "../context/MainContext";

const SingleRecipe = () => {


    const {currentId}=useContext(MainContext);

    return (
        <div className={'single'}>
            <RecipeCardBig recipeId={currentId}/>
        </div>
    );
};

export default SingleRecipe;