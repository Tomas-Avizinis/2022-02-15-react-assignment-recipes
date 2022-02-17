import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../context/MainContext";


const RecipeCard = ({recipe}) => {

    const nav=useNavigate();
    const {setCurrentRecipe, favourites, setFavourites, favouriteOnOff}=useContext(MainContext);

    const openSingle=()=>{
        const recipeLink=recipe.title.replace(' ', '_').toLowerCase();
        setCurrentRecipe(recipe);
        nav(`/recipe/${recipeLink}`);
    }

    return (
        <div className={'recipe-card-sm'} onClick={(openSingle)}>
            <div style={{backgroundImage: `url("${recipe.pictures[0]}")` }} />
            <div className={'recipe-info'}>
                <div className={'flex gap space-btw'}>
                    <h3>{recipe.title}</h3>
                    <span className={'favourite'}
                       style={{color: favourites.includes(recipe.id)? 'red': 'lightgray'}}
                       onClick={()=>favouriteOnOff(recipe.id)}
                       title='Add to favourites'
                        >❤</span>
                    <p>Time: <b>{recipe.prepTime}</b></p>
                </div>
                {/*{recipe.ingredients.map((ingred, i)=><p key={i}>{ingred}</p>)}*/}
                {/*<p><b>Preparation:</b></p>*/}
                {/*{recipe.steps.map((step, i)=><p key={i}>{i+1}. {step}</p>)}*/}
            </div>
        </div>
    );
};

export default RecipeCard;