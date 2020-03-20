import React, { useState } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext.js'

const App = () => {
  const [smurfs, setSmurfs] = useState([])
  return (
    <div className='App'>
      <SmurfContext.Provider value={{smurfs}}>
        <h1>first commit</h1>
      </SmurfContext.Provider>
    </div>
  )
}

export default App;
