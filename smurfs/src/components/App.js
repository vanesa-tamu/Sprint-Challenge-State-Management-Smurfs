import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext.js'
import axios from 'axios'

import Smurfs from './Smurfs.js'
import SmurfForm from './SmurfForm.js'

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


  const newSmurf = smurf => {
    //change age to number
    const submitSmurf = {
      name: smurf.name,
      age: Number(smurf.age),
      height: smurf.height
    }

    axios.post(`http://localhost:3333/smurfs`, submitSmurf)
      .then(res => {
        console.log('POST', res)
      })
      .catch(err => console.error('error in POST', err))

  }



  return (
    <div className='App'>
      <SmurfContext.Provider value={{ smurfs }}>
        <Smurfs />
        <SmurfForm newSmurf={newSmurf}/>
      </SmurfContext.Provider>
    </div>
  )
}

export default App;
