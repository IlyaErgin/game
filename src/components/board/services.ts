import * as React from "react";
import { IOwnProps } from "./types";
import { lines } from "./costants";

export const calculateWinner = (squares: string[]) => {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}