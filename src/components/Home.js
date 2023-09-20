import React from 'react';
import logo from '../logo.svg';


const Home = () => {
    return (
        <>
        <div className='home'>
        <div className="home-logo">
                    <img src={logo} alt="image-1" />
                </div>
            <div className='tex'>
                <h1>React</h1>
                <h2>The library for web and native user interfaces</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <button className='btn1'>Learn React</button>
            <button className='btn2'>API Reference</button>

        </div>
        </>
    );
}
export default Home;