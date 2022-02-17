import React from 'react';
import Carousell from "./Carousell";
import {favouriteOnOff} from "../features/recipes";
import {useDispatch} from "react-redux";

const RecipeCardBig = ({recipe}) => {

    const dispatch=useDispatch();

    return (
        <div className={'recipe-card-big'}>

            <div className={'img-big'}>
                <Carousell arr={recipe.pictures}/>
            </div>
            <div className={'recipe-info-big'}>
                <div className={'flex gap space-btw'}>
                    <h3>{recipe.title}</h3>
                    <p className={'favourite'}
                       style={{color: recipe.favourite? 'red': 'lightgray'}}
                       onClick={()=>dispatch(favouriteOnOff(recipe.id))}
                    >❤</p>
                    <p>Time: <b>{recipe.prepTime}</b></p>
                </div>
                {recipe.ingredients.map((ingred, i)=><p key={i}>{ingred}</p>)}
                <p><b>Preparation:</b></p>
                {recipe.steps.map((step, i)=><p key={i}>{i+1}. {step}</p>)}
            </div>
        </div>
    );
};

export default RecipeCardBig;