import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import RecipeCardBig from "../components/RecipeCardBig";
import MainContext from "../context/MainContext";

const SingleRecipe = () => {


    const {currentRecipe}=useContext(MainContext);

    return (
        <div className={'flex'}>
            <RecipeCardBig recipe={currentRecipe}/>
        </div>
    );
};

export default SingleRecipe;