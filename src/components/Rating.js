import React from 'react';

const Rating = ({rating}) => {

    const stars=['★','★','★','★','★'];

    return (

        <div className={'flex'}>
            {stars.map((star, i) => <div className={'rating-stars-lg'} key={i} style={{color: rating >= i + 1 && 'green'}}>{star}</div>)}
        </div>
    );
};

export default Rating;