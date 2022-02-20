import React, {useEffect, useRef, useState} from 'react';
import Footer from "./Footer";

const Filters = ({filterRecipes, noFilter}) => {

    const ingredRef=useRef();
    const ingredNumRef=useRef();
    const timeRef=useRef();
    const reviewNumRef=useRef();
    const checkRef=useRef();
    const ratingRef=useRef();


    const handleFilters=()=>{

        filterRecipes(
            ingredRef.current.value,
            ingredNumRef.current.value,
            timeRef.current.value,
            reviewNumRef.current.value,
            Number(ratingRef.current.value),
            ratingOn
        );
    }

    const clearInputs=()=>{
        ingredRef.current.value='';
        ingredNumRef.current.value='';
        timeRef.current.value='';
        reviewNumRef.current.value='';
        checkRef.current.checked=false;
        ratingRef.current.value='';
        noFilter();
        setRange(2);
        setRatingOn(false);
    }

    const [ratingOn, setRatingOn]=useState(false);
    const [range, setRange]=useState(2);


    useEffect(()=> {
        clearInputs();
    },[]);

    return (
        <div className={'side-bar'} >
            <h3>Filter recipes by</h3>
            <div className={'flex-col gap'}>

                <input type="text" ref={ingredRef} placeholder='Some ingredient'/>
                <input type="number" ref={ingredNumRef} placeholder='Number of ingredients'/>
                <input type="number" ref={timeRef} placeholder='Preparation time'/>
                <input type="number" ref={reviewNumRef} placeholder='Number of reviews'/>


                <div className={'flex gap'}>

                    <input type="checkbox" ref={checkRef} onChange={()=> setRatingOn(!ratingOn)} />

                    <input style={{opacity: ratingOn? '1':'.1'}} className={'range'} type="range" ref={ratingRef} min='0' max='4' step='.1' onChange={e=>setRange(e.target.value)} id='rating' />
                </div>
                <div style={{opacity: ratingOn? '1':'.1'}}>Rating: {Number(range)}-{Number(range)+1}</div>

                <button onClick={handleFilters} style={{width: '100%'}}>Filter</button>
                <button onClick={clearInputs}>Clear filters</button>
            </div>
            <Footer />
        </div>
    );
};

export default Filters;

