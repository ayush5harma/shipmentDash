import React from "react";
import Navbar from "./Navbar";
import Timeline from "./Timeline";
import TableContainer from "./TableContainer";
import Counters from "./Counters";

function  App() {
    return(
    <div>
        <Navbar />
        <Counters/>
        <Timeline />
        <TableContainer />
    </div>
    );
}

export default App
