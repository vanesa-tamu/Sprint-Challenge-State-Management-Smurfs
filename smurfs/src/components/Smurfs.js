import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext.js'
import Smurf from './Smurf.js'

const Smurfs = () => {
    const { smurfs } = useContext(SmurfContext)
    return(
        <>
            <h2>Smurfs:</h2>
            {smurfs.map(smurf => (
                <Smurf smurf={smurf} key={smurf.id}/>
            ))}
        </>
    )
}

export default Smurfs