import React, { useState } from 'react';
import './App.css';

const App = () => {
    
    const [value, setValue] = useState(0);
    const [toggle, setToggle] = useState(false);
    const bgColor = (toggle && value > 30) || (!toggle && value > 86) ? 'hot' : 'cold'
    
    const convertTemp = () => {
            if(toggle){
            setValue(value*9/5+32);
            }
            else if (!toggle){
            setValue((value-32)*5/9);
            }
        }

    

    return (
        <div className="container">

            <div className={`display ${bgColor}`}>
            {Math.round(value)}
            </div>

            <h1>{toggle ? "Celsius" : 'Fahrenheit'}</h1>
           
                <label className='switch'>
                    <input onClick={convertTemp} onChange={(e) => setToggle(e.target.checked)} className='toggle' type='checkbox'></input>
                    <span className='slider'></span>
                </label>
            
            <input onChange={(e) => setValue(e.target.value)} type="range" min="-100" max="100"></input>
        </div>
    )
}


export default App;