import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

export const Square = (props) => {
    const {onClick, value} = props;
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}