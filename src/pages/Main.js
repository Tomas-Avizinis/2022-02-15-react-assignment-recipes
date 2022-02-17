import React from 'react';
import {useSelector} from "react-redux";
import RecipeCard from "../components/RecipeCard";

const Main = () => {

    const recipes=useSelector((state)=> state.recipes.value);

    return (
        <div >
            <h1>Visu receptu sarasas (su filtrais)</h1>
            <div className={'flex wrap overflow'}>
                {recipes.map((r,i)=><RecipeCard recipe={r} key={i}/>)}
            </div>

        </div>
    );
};

export default Main;