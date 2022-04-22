import * as React from "react";
import { IOwnProps } from "./types";

export const Square: React.FC<IOwnProps> = ({value, onClick}) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}