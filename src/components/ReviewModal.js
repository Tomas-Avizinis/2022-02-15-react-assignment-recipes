import React, {useRef, useState} from 'react';
import Rating from "./Rating";
import {useDispatch} from "react-redux";
import {addReview} from "../features/recipes";


const ReviewModal = ({recipe, setShowReview}) => {

    const dispatch=useDispatch();

    const rating= recipe.reviews.length ? (recipe.reviews.reduce((sum, r)=>sum + r.rating, 0)/recipe.reviews.length).toFixed(2) : 'Not rated';

    const stars=['★','★','★','★','★'];
    const [myRating, setMyRating]=useState(0);


    const [sort, setSort]=useState(true);

    const reviewRef=useRef();

    const handleReview=()=>{
        if (reviewRef.current.value && myRating){

            dispatch(addReview({
                id:recipe.id,
                rating:myRating,
                text: reviewRef.current.value
            }));

            setMyRating(0);

        }
    }

    return (
        <div className={'review-modal'}>
            {/*<div className={'flex space-btw'} style={{width:'100%'}}>*/}


            {/*</div>*/}

            <div className={'flex left gap '} >
                <input type="text" placeholder={'Write review and give stars'} ref={reviewRef} style={{width: '220px'}}/>
                <div className={'flex'}>
                    {stars.map((star,i)=>
                        <div className={'click'} key={i} onClick={()=>{setMyRating(i+1)}} style={{color: myRating>i? 'green':'#bbbbbb'}} >★</div>
                    )}
                </div>
                <button onClick={handleReview}>Submit</button>
            </div>

            <div className={'flex space-btw'} style={{width:'100%'}}>
                <div className={'flex gap'}>
                    <p><b>Reviews:</b></p>
                    {/*<button onClick={()=>{setSort(!sort)}}>{sort? 'new ➠ old ': 'old ➠ new'}</button>*/}
                </div>

                {/*<div className={'flex gap'}>*/}
                {/*    <Rating rating={rating}/>*/}
                {/*    <b>{rating.toFixed(2)}</b>*/}
                {/*</div>*/}
            </div>


            <div className={` ${sort? 'flex-col': 'flex-col-rev'} left`}>
                {recipe.reviews.map((r, i)=>
                    <div className={'flex gap'} key={i}>
                        <div className={'rating-stars-sm'}>{'★★★★★'.slice(5-r.rating)}</div>
                        <p className={'text'} >{r.text} </p>
                        {/*<div className={'rating'}>{r.rating} </div>*/}

                    </div>)
                }
            </div>

            <button className={'close'} onClick={()=>setShowReview(false)}>X</button>
        </div>
    );
};

export default ReviewModal;