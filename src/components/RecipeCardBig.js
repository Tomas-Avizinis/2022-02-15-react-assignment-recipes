import React, {useContext} from 'react';
import Carousell from "./Carousell";
import MainContext from "../context/MainContext";


const RecipeCardBig = ({recipe}) => {

    const {favourites, favouriteOnOff}=useContext(MainContext);


    return (
        <div className={'recipe-card-big'}>

            <div className={'img-big'}>
                <Carousell arr={recipe.pictures}/>
            </div>
            <div className={'recipe-info-big'}>
                <div className={'flex gap space-btw'}>
                    <h3>{recipe.title}</h3>
                    <span className={'favourite'}
                        style={{color: favourites.includes(recipe.id)? 'red': 'lightgray'}}
                        onClick={()=>favouriteOnOff(recipe.id)}
                        title='Add to favourites'
                    >❤</span>
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