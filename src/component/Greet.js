import React from 'react';
import './AppStyling.css';


const greeting ={
    color:'blue'
}
function Greet () {
    return (
        <div>
            <div className='box'>
                <h1>This is created using functional component </h1>
                <p>This is done using external CSS</p>
                <p style={greeting}>This is done using inline CSS</p>
            </div>                     
        </div>
    )
}
export default Greet;