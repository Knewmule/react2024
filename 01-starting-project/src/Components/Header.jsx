import React from "react";
import logoImg from '../assets/logo.jpg'
export default function Header() {

    return(
        <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg } alt={"Restuarnt Food"}/>
                <h1>React Food</h1>
            </div>
            <nav>
                <button>cart(0)</button>
            </nav>
            
        </header>
        </>
    );
}