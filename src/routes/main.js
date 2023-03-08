import React from 'react';
import "./main.css";
// import Linking from '../Link';
import { Link } from 'react-router-dom';
export default function Main() {
    return (
        <div>
        <nav class="topnav">
        <ul>
        <img alt="Logo" class = "img1" src="Logo.svg"></img>
        <Link to="/login"><p><button className='button-53'>LOGIN</button></p></Link>
        <Link to="/contact"><li><h3>Contact Us</h3></li></Link>
        <Link to="/about"><li><h3>About</h3></li></Link>
        <Link to="/"><li><h3>Home</h3></li></Link>
        <br/>
        </ul>
        </nav>
        <br/>  
        </div>
        )
    }
    