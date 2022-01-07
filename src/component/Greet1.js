import React, { Component } from 'react';
import './AppStyling.css';

const greeting ={
    color:'red'
}

export default class Greet1 extends Component {
    render() {
        return (
            <div>
                <div className='box1'>
                    <h1>This is created using class component </h1>
                    <p>This is done using external CSS</p>
                    <p style={greeting}>This is done using inline CSS</p>
                
                </div>
            </div>
        )
    }
}