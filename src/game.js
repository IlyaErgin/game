import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import { Board } from './board';

export const Game = () => {
    return(
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );  
}