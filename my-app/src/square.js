import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

export function Square(props){
    console.log('hi');
    console.log(props.value);
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
