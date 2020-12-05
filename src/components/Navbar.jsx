import React from "react";
const logo ="./FrontendAssets/logo.svg"
const profile ="./FrontendAssets/profile.svg"
const caret = "./FrontendAssets/caret.png"

function Navbar() {
    return (
        <div className="nav">
            <a ><img src={logo} /> </a>
            <a>Intugine</a>
            <div className="nav-right">
                <a href="#">Home</a>
                <a href="#">Brands</a>
                <a href="#">Transporters</a>
                <a href="#">Transporters</a>
                <a><img src={profile} /></a>
                <a><img src={caret} /></a>
            </div>
        </div>
    );
}

export default Navbar;