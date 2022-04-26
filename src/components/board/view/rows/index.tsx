import * as React from 'react';
import { useMemo, useCallback, useState, useEffect } from 'react';
import { Square } from '../../../square';
import { IOwnProps } from './types';
import { calculateWinner } from '../../services';

export const Rows: React.FC<IOwnProps> = React.memo(({xIsNext, onChangeNext, onChangeStatus}) => {

    const [squares, setSquares] = useState<string[]>(Array(9).fill(""))

    const handleClick = useCallback( (i: number) => {
        return() => {
            const squaresSlice = squares.slice();
            if (calculateWinner(squaresSlice) || squaresSlice[i]){
                return;
            }
            squaresSlice[i] = xIsNext ? 'X' : 'O';
            setSquares([...squaresSlice])
            onChangeNext(!xIsNext);
        }
    }, [squares]);


    useEffect(() => {
        const winner = calculateWinner(squares);
        if(!squares.includes("")){
            onChangeStatus("Draw");
        } else {
            onChangeStatus("Next is " + (xIsNext ? "X" : "O"));
        }
        if (winner){
            onChangeStatus("Win " + winner);
        } 
    }, [squares])
    
    const rows = useMemo(() => Array.from({length: 3}), [])
    return (
        <div className="array">
            {rows.map((_, index) => {
                return (
                    <div key={index} className="board-row">
                        <Square value={squares[index * 3]} onClick={handleClick(index * 3)}/>
                        <Square value={squares[index * 3 + 1]} onClick={handleClick(index * 3 + 1)}/>
                        <Square value={squares[index * 3 + 2]} onClick={handleClick(index * 3 + 2)}/>
                    </div>
                );
            })}
        </div>
    );
});