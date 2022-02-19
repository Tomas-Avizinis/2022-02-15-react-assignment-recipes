import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../context/MainContext";
import {useSelector} from "react-redux";
import Rating from "./Rating";


const RecipeCard = ({recipeId}) => {

    const nav=useNavigate();
    const { favourites, favouriteOnOff, setCurrentId}=useContext(MainContext);

    const recipes=useSelector((state)=> state.recipes.value);
    const recipe=recipes.find(r=>r.id===recipeId);

    const openSingle=()=>{
        const recipeLink=recipe.title.replaceAll(' ', '_').toLowerCase();
        setCurrentId(recipe.id);
        nav(`/recipe/${recipeLink}`);
    }


    const rating= recipe.reviews.length ? (recipe.reviews.reduce((sum, r)=>sum + r.rating, 0)/recipe.reviews.length).toFixed(2) : 'Not rated';

    return (
        <div className={'recipe-card-sm'} >


            <div className={'image'} style={{backgroundImage: `url("${recipe.pictures[0]}")` }} onClick={(openSingle)} />


            <div className={'recipe-info'}>
                <div className={'flex space-btw w100 shade'} >
                    <div className={'favourite'}
                         style={{color: favourites.includes(recipe.id)? 'red': 'lightgray'}}
                         onClick={()=>favouriteOnOff(recipe.id)}
                         title='Add to favourites'> ❤
                    </div>
                    {rating!=='Not rated' && <Rating rating={rating}/>}
                    <div>{rating}</div>

                </div>

                <div className={'flex space-btw w100'} >
                    <div>Ingredients: {recipe.ingredients.length}</div>
                    <div>Time: <b>{recipe.prepTime} min.</b></div>
                </div>

            </div>

            <h3 className={'title'}>{recipe.title}</h3>
        </div>
    );
};

export default RecipeCard;


