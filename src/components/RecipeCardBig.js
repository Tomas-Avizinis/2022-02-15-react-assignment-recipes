import React, {useContext, useState} from 'react';
import Carousell from "./Carousell";
import MainContext from "../context/MainContext";
import Rating from "./Rating";
import ReviewModal from "./ReviewModal";
import {useSelector} from "react-redux";


const RecipeCardBig = ({recipeId}) => {

    const recipes=useSelector((state)=> state.recipes.value);
    const recipe=recipes.find(r=>r.id===recipeId);

    const {favourites, favouriteOnOff}=useContext(MainContext);
    const [showReview, setShowReview]=useState(false);

    console.log(recipe);

    const rating= recipe.reviews.length ? (recipe.reviews.reduce((sum, r)=>sum + r.rating, 0)/recipe.reviews.length).toFixed(2) : 'Not rated';

    return (
        <div className={'recipe-card-big'}>

            <div className={'img-big'} >
                <Carousell arr={recipe.pictures} />
                {showReview && <ReviewModal recipe={recipe} setShowReview={setShowReview}/>}
            </div>

            <div className={'recipe-info-big'}>
                <div>
                    <h3>{recipe.title}</h3>
                    <div className={'flex gap space-btw'}>

                        <span className={'favourite'}
                              style={{color: favourites.includes(recipe.id)? 'red': 'lightgray'}}
                              onClick={()=>favouriteOnOff(recipe.id)}
                              title='Add to favourites'
                        >❤</span>
                        <div className={'flex gap'}>
                            {rating!=='Not rated' && <Rating rating={rating}/>}
                            <b>{rating}</b>
                        </div>
                    </div>
                    <div className={'flex space-btw time'}>
                        <div/>
                        <p >Prep. time: <b>{recipe.prepTime}</b></p>
                    </div>

                </div>


                <div>
                    <p className={'subtitle'}><b>You will need:</b></p>
                    {recipe.ingredients.map((ingred, i)=><p key={i}>{ingred}</p>)}
                </div>

                <div>
                    <p className={'subtitle'}><b>Preparation:</b></p>
                    {recipe.steps.map((step, i)=><p key={i}>{i+1}. {step}</p>)}
                </div>

                <button onClick={()=>setShowReview(!showReview)}>{ showReview? 'Hide' :'Show'} reviews ({recipe.reviews.length})</button>
            </div>


        </div>
    );
};

export default RecipeCardBig;

