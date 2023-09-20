import React from 'react';



const Reference = () => {
    return (
        <>
        <span class="api">API REFERENCE <i class="fa-solid fa-chevron-right"></i></span>
        <div className='reference'>
            <h1 className='header-reference'>Built-in React Hooks</h1>
            <p className='para'>Hooks let you use different React features from your components. You can either <br></br>use the built-in Hooks or combine them to build your own. This page lists all built-in<br></br>Hooks in React.</p>
            <hr className='line'></hr>
            <h2 className='header2-reference'>State Hooks </h2>
            <p className='para'>State lets a component<span className='para-span'>"remember" information like user input.</span>For example, a form component<br></br>can use state to store the input value, while an image gallery component can use state to store <br></br>the selected image index. </p>
            <p>To add state to a component, use one of these Hooks:</p>
            <button className='btn-reference1'>usestate</button>
            <button className='btn-reference2'>useReducer</button>
            </div>
        
        </>
    );
}
export default Reference;