import React from "react";

function TemperatureDisplay ({temp}) {

    let message = ''
    let colorTemp = 'green'
    if (temp <= 15) {
        message = 'Hace frío'
        colorTemp = 'blue'
    } else if (temp > 25) {
        message = 'Hace calor'
        colorTemp = 'red'
    } else message = 'Temperatura agradable'

    return (
        <>
            <h2>{temp}</h2>
            <p style={{color: colorTemp}}>{message}</p>
        </>
    )
}

export default TemperatureDisplay;