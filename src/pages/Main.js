import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import RecipeCard from "../components/RecipeCard";
import Filters from "../components/Filters";


const Main = () => {

    const recipes=useSelector((state)=> state.recipes.value);
    const [filteredRecipes, setFilteredRecipes]=useState(recipes);


    const noFilter=()=>setFilteredRecipes(recipes);

    const filterRecipes=(ingredients, ingredNumber, time, reviewNum, rating, ratingOn)=>{

        noFilter();

        const filter1= ingredients ? recipes.filter(r => r.ingredients.includes(ingredients)) : recipes;
        const filter2= ingredNumber!=='' ? filter1.filter(r => r.ingredients.length==ingredNumber) : filter1;
        const filter3= time!=0 ? filter2.filter(r => r.prepTime==time) : filter2;
        const filter4= reviewNum!=0 ? filter3.filter(r => r.reviews.length==reviewNum) : filter3;
        const filter5= ratingOn ? filter4.filter(r=>(r.reviews.reduce((sum, r)=>sum + r.rating, 0)/r.reviews.length)>=rating && (r.reviews.reduce((sum, r)=>sum + r.rating, 0)/r.reviews.length)<=rating+1) : filter4;

        setFilteredRecipes(filter5);
    }


    return (
        <div className={'main'}>
            <Filters filterRecipes={filterRecipes} noFilter={noFilter} />
            <div className={'content'}>
                {filteredRecipes.map((r,i)=><RecipeCard recipeId={r.id} key={i}/>)}
            </div>

        </div>
    );
};

export default Main;



// const filter1=(ingredients)=> setFilteredRecipes(filteredRecipes.filter(r => r.ingredients.includes(ingredients)));
// const filter2=(ingredNumber)=>setFilteredRecipes(filteredRecipes.filter(r => r.ingredients.length==ingredNumber));