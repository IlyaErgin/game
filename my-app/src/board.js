import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import { calculateWinner } from "./calculateWinner"
import { Square } from './square';

export class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    
    /*handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    */

    handleClick(i) {
        return() => {
            const squares = this.state.squares.slice();
            if (calculateWinner(squares) || squares[i]){
                return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext,
                });
        }
    }
    

    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]}
                onClick={this.handleClick(i)}
            />
        );
    }

    render(){
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner){
            status = 'Win ' + winner;
        }
        else{
            status = 'Next is ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className='array'>
                    {Array.from({length: 3}).map((_, index ) => (
                        <div key={index} className="board-row">
                            {this.renderSquare(index * 3)}
                            {this.renderSquare((index * 3) + 1)}
                            {this.renderSquare((index * 3) + 2)}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}