// zdes budet Board
import * as React from "react";
import { useState, useCallback, useEffect } from "react";
import { calculateWinner } from "./services";
import { Square } from "../square";
import { Rows } from "./view/rows";
import { IState } from "./types";

export const BoardTemp: React.FC<{onChangeShow: () => void}> = (props) =>{
    const [xIsNext, setXisNext] = useState<boolean>(true);
    const [status, setStatus] = useState('');

    
    useEffect(() => {
        if(!status.includes('Next') && status !== ''){
            props.onChangeShow()
        }
    }, [status])

    const onChangeNext = useCallback((value: boolean) => setXisNext(value),[]);
    const onChangeStatus = useCallback((value: string) => setStatus(value),[]);

    return (
        <div>
            <div className="status">{status}</div>
            <Rows xIsNext={xIsNext} onChangeNext={onChangeNext} onChangeStatus={onChangeStatus}/>
        </div>
    )
}