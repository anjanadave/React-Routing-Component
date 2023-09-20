import React from 'react';
import { Link ,} from "react-router-dom";


const Learn = () => {
    return (
        <>

     
           
        
        <span class="topic">LEARN REACT <i class="fa-solid fa-chevron-right"></i></span>
        <div className='learn'>
            <h1 className='header1'>Quick Start</h1>
            <h2 className='header2'>
            Welcome to the React documentation! This page will give you an introduction to the<br></br>80% of React concepts that you will use on a daily basis.
            </h2>
            <h3 className='header3'>You will learn</h3>
            <div className='contain-list'>
                <ul>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
            <button className='btn-quick'>Quick Start</button>
        </div>
        </>
    );
}
export default Learn;