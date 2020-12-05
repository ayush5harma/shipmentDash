import React from "react";
import Navbar from "./Navbar";
import Timeline from "./Timeline";
//
// async getdata(){
//     const url = "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
// }

function  App() {
    return(
    <div>
        <Navbar />
        <Timeline />
    </div>
    );
}

export default App


