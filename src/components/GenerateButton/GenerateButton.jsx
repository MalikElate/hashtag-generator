import React, { useState } from 'react';

function GenerateButton() {
    const handleInput = () => {
        setCount(input + 1);
        console.log(input);
    }
    const [input, setCount] = useState(0);


    return (
        <div className="App">
            <button onClick={handleInput}>Click me</button>
        </div>
    );
}

export default GenerateButton;