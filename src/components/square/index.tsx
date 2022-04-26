import * as React from "react";
import { IOwnProps } from "./types";

export const Square: React.FC<IOwnProps> = React.memo(({value, onClick}) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
});