import React from 'react'

const Smurf = (props) => {
    return(
        <div>
            <h2>{props.smurf.name}</h2>
            <h3>age: {props.smurf.age}</h3>
        </div>
    )
}

export default Smurf