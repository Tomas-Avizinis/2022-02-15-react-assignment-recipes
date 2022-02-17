import React, {useState} from 'react';

const Carousell = ({arr}) => {

    const [position, setPosition]=useState(0);

    const left=()=>{
        if (position!==0) setPosition(position+100);
    };

    const right=()=>{
        if (position!==-(arr.length-1)*100) setPosition(position-100);
    }

    return (
        <div className={'carousell-frame'}>

            <div className={'carousell-slider'} style={{width: `${arr.length*100}%`, left:`${position}%`}}>
                {arr.map((pic,i)=><div className={'carousell-item'} key={i} style={{
                    backgroundImage: `url("${pic}")`,
                    width: `${100/arr.length}%`,
                }} />)}
            </div>

            <div className={'carousell-btn left'} onClick={left}>◀</div>
            <div className={'carousell-btn right'} onClick={right}>▶</div>

            <div className={'carrousel-preview'} style={{width: `${arr.length*60}px`}}>
                {arr.map((pic,i)=><div className={'carousell-item-preview'} key={i} style={{
                    backgroundImage: `url("${pic}")`,
                    width: `${100/arr.length}%`,
                    border: position===-i*100 && '2px solid white',
                }} onClick={()=>setPosition(-i*100)}/>)}
            </div>

        </div>
    );
};

export default Carousell;