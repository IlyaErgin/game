import * as React from "react";
import { BoardTemp } from "../board";

export const Game: React.FC = () => {
    return (
        <div className="game">
            <div className="game-board">
                <BoardTemp />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}