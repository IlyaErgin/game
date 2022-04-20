import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

/*export function Square(props){
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
*/
export const Square = (props) => {
    const {onClick, value} = props;
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}