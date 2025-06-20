import React from "react"
import {useState} from 'react'
import TemperatureControls from "./components/TemperatureControls";
import TemperatureDisplay from "./components/TemperatureDisplay";
import HistoryList from "./components/HistoryList";

function App () {

  const [temp, setTemp] = useState(20);
  const [hist, setHist] = useState({
    hour: toLocaleTimeString(),
    temperature: temp
  });

  

  const upTemp = () => {
    temp < 40 ? setTemp(temp + 1) : setTemp(temp)
    setHist([...hist, {hour: toLocaleTimeString(), temperature: temp}])
  }

  const downTemp = () => {
    temp > 0 ? setTemp(temp - 1) : setTemp(temp)
    setHist([...hist, {hour: toLocaleTimeString(), temperature: temp}])
  }

  const reset = () => {
    setTemp(20)
    setHist([...hist, {hour: toLocaleTimeString(), temperature: temp}])
  }



  return (
    <>
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureControls
        onTemp={upTemp}
        onTempDown={downTemp}
        onReset={reset}
      />
      <TemperatureDisplay temp={temp}/>
      <HistoryList hist={hist}/>
    </div>
    </>
  )
}

export default App