import React from "react"
import {useState} from 'react'
import TemperatureControls from "./components/TemperatureControls";
import TemperatureDisplay from "./components/TemperatureDisplay";
import HistoryList from "./components/HistoryList";

function App () {

  const event = new Date
  
  const [temp, setTemp] = useState(20);
  let [hist, setHist] = useState([
    { id: 1, hour: event.toLocaleTimeString(), temperature: 20 }
  ]);

  const upTemp = () => {
    temp < 40 ? setTemp(temp + 1) : setTemp(temp)
    if (temp < 40) {
      setHist([...hist, { id: hist.length + 1, hour: event.toLocaleTimeString(), temperature: temp + 1 }])

      storage = JSON.stringify([{ hour: event.toLocaleTimeString(), temperature: temp + 1 }])
      localStorage.setItem(JSON.stringify(hist.length + 1), storage)
    }
  }

  const downTemp = () => {
    temp > 0 ? setTemp(temp - 1) : setTemp(temp)
    if (temp > 0) {
      setHist([...hist, { id: hist.length + 1, hour: event.toLocaleTimeString(), temperature: temp - 1 }])

      storage= JSON.stringify([{ id: hist.length + 1, hour: event.toLocaleTimeString(), temperature: temp - 1 }])
      localStorage.setItem(JSON.stringify(hist.length + 1), storage)
    }

  }

  const reset = () => {
    setTemp(20)
    setHist([{ id: 1, hour: event.toLocaleTimeString(), temperature: 20 }]);

    localStorage.clear("");
    storage= JSON.stringify([{ hour: event.toLocaleTimeString(), temperature:20 }])
    localStorage.setItem("1", storage)
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
      <div>
        <ul>
        {hist.map(capture => (
          <HistoryList
            key={hist.id}
            onHistory={capture}/>
        ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App