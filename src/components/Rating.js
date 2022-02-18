import React from 'react';

const Rating = ({rating}) => {
    return (

        <div className={'flex'}>
            <p style={{color: rating>=1? 'green': 'gray'}}>★</p>
            <p style={{color: rating>=2? 'green': 'gray'}}>★</p>
            <p style={{color: rating>=3? 'green': 'gray'}}>★</p>
            <p style={{color: rating>=4? 'green': 'gray'}}>★</p>
            <p style={{color: rating===5? 'green': 'gray'}}>★</p>
        </div>
    );
};

export default Rating;