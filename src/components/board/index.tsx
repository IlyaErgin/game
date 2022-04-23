// zdes budet Board
import * as React from "react";
import { useState, useCallback } from "react";
import { calculateWinner } from "./services";
import { Square } from "../square";
import { Rows } from "./view/rows";
import { IState } from "./types";

export const BoardTemp: React.FC = () =>{
    const [xIsNext, setXisNext] = useState<boolean>(true);
    const [status, setStatus] = useState('');
    const [refresh, setRefresh] = useState<number>(0);

    const onChangeNext = useCallback((value: boolean) => setXisNext(value),[]);
    const onChangeStatus = useCallback((value: string) => setStatus(value),[]);

    return (
        <div>
            <button onClick={() => setRefresh(prev => prev + 1)}>click</button>
            <div className="status">{status}</div>
            <Rows xIsNext={xIsNext} onChangeNext={onChangeNext} onChangeStatus={onChangeStatus}/>
        </div>
    )
}