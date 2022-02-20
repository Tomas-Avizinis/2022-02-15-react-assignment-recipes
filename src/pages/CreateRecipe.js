import React, {useContext, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addRecipe} from "../features/recipes";
import {useNavigate} from "react-router-dom";
import MainContext from "../context/MainContext";


const CreateRecipe = () => {

    const dispatch=useDispatch();
    const recipes=useSelector((state)=> state.recipes.value);
    const nav=useNavigate();

    const titleRef=useRef();
    const prepTimeRef=useRef();

    const [picArray, setPicArray]=useState(['','']);
    const [ingredArray, setIngredArray]=useState(['','']);
    const [stepsArray, setStepsArray]=useState(['']);

    const {setLocation}=useContext(MainContext);

    const currentId= recipes[recipes.length-1].id+1;

    const submitRecipe=()=>{

        if (titleRef.current.value !== '' &&
            picArray.every(pic=>pic.startsWith('http')) &&
            ingredArray.every(ingred=>ingred) &&
            prepTimeRef.current.value &&
            stepsArray.every(step=>step)) {

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
            setLocation('main');
        }
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
        <div className={'create flex-col gap'}>
            <div className={'flex-col gap left'}>

                <input type="text" ref={titleRef} placeholder={'Title'} style={{width: '100%'}}/>

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

                <input type="number" ref={prepTimeRef} placeholder={'preparation time'}/>

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

                <button onClick={submitRecipe} style={{width: '100%', margin:'20px 0 50px 0'}}>Create</button>
            </div>
        </div>
    );
};

export default CreateRecipe;
