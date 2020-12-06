import React from "react";
import gridData from "./Tabledata";

function Counters() {
    return (
        <div className="counter">
            <a className="active">DEL <span className="CounterNumber">941</span></a>

            <a>INT <span className="CounterNumber">342</span></a>
            <a>OOD <span className="CounterNumber">232</span></a>
            <a>DEX <span className="CounterNumber">916</span></a>
            <a>NFI <span className="CounterNumber">324</span></a>

        </div>
    );
}

export default Counters;