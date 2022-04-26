import * as React from "react";
import { useState, useEffect } from "react";
import { BoardTemp } from "../board";

export const Game: React.FC = () => {
    const [refresh, setRefresh] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        setShow(false);
    }, [refresh])
    return (
        <div className="game" key={refresh}>
            {show && <button onClick={() => setRefresh(prev => prev + 1)}>Refresh</button>}
            <div className="game-board">
                <BoardTemp onChangeShow={() => setShow(true)}/>
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}