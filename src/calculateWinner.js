import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import { lines } from './lines';

export function calculateWinner(squares) {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}