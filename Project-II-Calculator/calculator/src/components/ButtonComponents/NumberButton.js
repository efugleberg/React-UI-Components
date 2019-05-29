import React from 'react';
import './Button.css';




const NumberButton = props => {
    const Array = [];
    for (let i=0; i < 10; i++) {
    Array.push(i);
    };
    return (
        <div>
    <button className={props.buttonStyle}> {props.text} </button> </div>
    );
}

export default NumberButton;