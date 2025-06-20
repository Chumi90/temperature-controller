import React from 'react'

function TemperatureControls ({onTemp, onTempDown, onReset}) {

    return (
        <>
            <button onClick={() => onTemp()}>+</button>
            <button onClick={() => onTempDown()}>-</button>
            <button onClick={() => onReset()}>reset</button>
        </>
    )
}

export default TemperatureControls;