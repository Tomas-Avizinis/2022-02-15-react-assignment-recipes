import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addRecipe} from "../features/recipes";
import {useNavigate} from "react-router-dom";


const CreateRecipe = () => {

    const dispatch=useDispatch();
    const recipes=useSelector((state)=> state.recipes.value);
    const nav=useNavigate();

    const titleRef=useRef();
    const prepTimeRef=useRef();

    const [picArray, setPicArray]=useState(['','']);
    const [ingredArray, setIngredArray]=useState(['','']);
    const [stepsArray, setStepsArray]=useState(['']);

    const currentId= recipes[recipes.length-1].id+1;
    console.log('naujo recepto id', currentId);

    const submitRecipe=()=>{

        dispatch(addRecipe({
            title: titleRef.current.value,
            id:currentId,
            favourite:false,
            pictures: picArray,
            ingredients: ingredArray,
            prepTime:prepTimeRef.current.value,
            steps: stepsArray,
            reviews:[]
        }));
        nav('/');
    }



    const picArrayChange=(i,e)=>{
        const newPicArray=[...picArray];
        newPicArray[i]=e.target.value;
        setPicArray(newPicArray);
    }

    const ingredArrayChange=(i,e)=>{
        const newIngredArray=[...ingredArray];
        newIngredArray[i]=e.target.value;
        setIngredArray(newIngredArray);
    }

    const stepsArrayChange=(i,e)=>{
        const newStepsArray=[...stepsArray];
        newStepsArray[i]=e.target.value;
        setStepsArray(newStepsArray);
    }


    const picArrayIncrease=()=>setPicArray([...picArray, '']);
    const ingredArrayIncrease=()=>setIngredArray([...ingredArray, '']);
    const stepsArrayIncrease=()=>setStepsArray([...stepsArray, '']);

    const picArrayDecrease=()=>{
        if (picArray.length>2) {
            picArray.splice(-1,1);
            setPicArray([...picArray]);
        }
    }
    const ingredArrayDecrease=()=>{
        if (ingredArray.length>2) {
            ingredArray.splice(-1,1);
            setIngredArray([...ingredArray]);
        }
    }
    const stepsArrayDecrease=()=>{
        if (stepsArray.length>1) {
            stepsArray.splice(-1,1);
            setStepsArray([...stepsArray]);
        }
    }


    return (
        <div className={'flex-col gap overflow'}>
            <h1>Sukurti recepta</h1>

            <div className={'flex-col gap left'}>

                <input type="text" ref={titleRef} placeholder={'Title'}/>

                <fieldset className={'flex-col left'}>
                    <legend>Pictures</legend>
                    {picArray.map((p,i)=>
                        <div className={'flex gap'} key={i} >
                            <input placeholder={'photo'+(i+1)} onChange={e=>picArrayChange(i,e)}/>
                            {i===0 && <button className={'addRemove'} onClick={picArrayIncrease}>+</button>}
                            {(i===picArray.length-1 && picArray.length>2) && <button className={'addRemove'} onClick={picArrayDecrease}>-</button>}
                        </div>
                    )}
                </fieldset>

                <fieldset className={'flex-col left'}>
                    <legend>Ingredients</legend>
                    {ingredArray.map((p,i)=>
                        <div className={'flex gap'} key={i} >
                            <input placeholder={'ingred.'+(i+1)} onChange={e=>ingredArrayChange(i,e)}/>
                            {i===0 && <button className={'addRemove'} onClick={ingredArrayIncrease}>+</button>}
                            {(i===ingredArray.length-1 && ingredArray.length>2) && <button className={'addRemove'} onClick={ingredArrayDecrease}>-</button>}
                        </div>
                    )}
                </fieldset>


                <input type="text" ref={prepTimeRef} placeholder={'preparation time'}/>

                <fieldset className={'flex-col left'}>
                    <legend>Preparation</legend>
                    {stepsArray.map((p,i)=>
                        <div className={'flex gap'} key={i} >
                            <input placeholder={'step'+(i+1)} onChange={e=>stepsArrayChange(i,e)}/>
                            {i===0 && <button className={'addRemove'} onClick={stepsArrayIncrease}>+</button>}
                            {(i===stepsArray.length-1 && stepsArray.length>1) && <button className={'addRemove'} onClick={stepsArrayDecrease}>-</button>}
                        </div>
                    )}
                </fieldset>

                <button onClick={submitRecipe}>Create</button>
            </div>

        </div>
    );
};

export default CreateRecipe;


/////////////////////////////////////////
// PICTURES FOR RECIPES
// https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/374/404/846/brown-bird-perching-during-daytime-wren-wren-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/388/340/982/food-salad-vegetable-pepper-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/437/455/804/food-fruit-strawberries-blood-orange-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/770/26/351/food-fruits-and-vegetables-wallpaper-preview.jpg
// https://c1.wallpaperflare.com/preview/166/884/864/skewer-kebab-barbecue-food.jpg
// https://c4.wallpaperflare.com/wallpaper/754/274/368/food-drinking-glass-fruit-kiwi-fruit-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/443/638/469/japanese-cuisine-food-japanese-food-sashimi-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/824/430/458/movies-toy-story-animated-movies-pixar-animation-studios-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/776/107/693/food-cheese-milk-tomatoes-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/432/234/423/food-cheese-wheat-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/554/968/10/cheese-food-piece-wallpaper-thumb.jpg
// https://c4.wallpaperflare.com/wallpaper/960/148/933/cheese-sliced-food-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/798/46/343/cheese-mold-olives-food-wallpaper-thumb.jpg
// https://c4.wallpaperflare.com/wallpaper/623/784/892/sandwich-tomato-grape-toast-wallpaper-thumb.jpg
// https://c4.wallpaperflare.com/wallpaper/80/761/191/meat-cheese-wine-food-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/99/757/318/meat-pieces-greens-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/772/819/583/meat-garlic-spices-parsley-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/1012/547/688/meat-fresh-board-spices-wallpaper-preview.jpg
// https://c4.wallpaperflare.com/wallpaper/46/460/992/meat-sausage-meats-greens-wallpaper-preview.jpg