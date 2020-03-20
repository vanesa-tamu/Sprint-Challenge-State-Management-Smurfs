import React, { useState } from 'react'

const SmurfForm = ( {newSmurf} ) => {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setSmurf({
            ...smurf,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        newSmurf(smurf)
        setSmurf({
            name: '',
            age: '',
            height: ''
        })
    }
    console.log('SMURF FORM', smurf)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input 
                    id='name'
                    name='name'
                    type='text'
                    type='text'
                    value={smurf.name}
                    onChange={handleChange}
                />

                <label htmlFor='age'>Age</label>
                <input 
                    id='age'
                    name='age'
                    type='number'
                    value={smurf.age}
                    onChange={handleChange}
                />

                <label htmlFor='height'>Height(cm)</label>
                <input 
                    id='height'
                    name='height'
                    type='text'
                    value={smurf.height}
                    onChange={handleChange}
                />
                <button type='submit'>Join the Village</button>
            </form>
        </div>
    )
}

export default SmurfForm