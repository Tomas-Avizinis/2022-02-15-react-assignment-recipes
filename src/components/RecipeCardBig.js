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


    const rating= recipe.reviews.length ? (recipe.reviews.reduce((sum, r)=>sum + r.rating, 0)/recipe.reviews.length).toFixed(2) : 'Not rated yet';

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
                              title={favourites.includes(recipe.id)? 'Remove from favourites' : 'Add to favourites'}>❤
                        </span>
                        <div className={'flex gap'}>
                            {rating!=='Not rated yet' && <Rating rating={rating}/>}
                            <b>{rating}</b>
                        </div>
                    </div>
                    <div className={'flex-col left time'}>
                        <p >Preparation time: <b>{recipe.prepTime} min.</b></p>

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

                <button onClick={
                    ()=>setShowReview(!showReview)}>{
                    recipe.reviews.length?
                        showReview?
                            `Hide reviews (${recipe.reviews.length})`
                            : `Show reviews (${recipe.reviews.length})`
                        : 'Write first review'
                }</button>
            </div>


        </div>
    );
};

export default RecipeCardBig;

