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
    handleClick(i) {
        console.log("handle");
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

    renderSquare(i) {
        console.log("rendersquare");
        return (
            
            <Square 
                value={this.state.squares[i]}
                onClick={this.handleClick.bind(this,i)}
            />
        );
    }
    /*
    <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
     */

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
                            <div onClick={this.renderSquare.bind(this,index + 1)} className="square"></div>
                            <div onClick={this.renderSquare.bind(this,index + 2)} className="square"></div>
                            <div onClick={this.renderSquare.bind(this,index + 3)} className="square"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}