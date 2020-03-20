import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext.js'
import axios from 'axios'

import Smurfs from './Smurfs.js'

const App = () => {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        // console.log(res.data)
        setSmurfs(res.data)
      })
      .catch(err => console.error('error in GET', err))
  }, [])
  console.log("smurfs STATE", smurfs)

  return (
    <div className='App'>
      <SmurfContext.Provider value={{ smurfs }}>
        <Smurfs />
      </SmurfContext.Provider>
    </div>
  )
}

export default App;
