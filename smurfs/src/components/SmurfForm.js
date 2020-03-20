import React, { useState } from 'react'

const SmurfForm = ({SmurfForm}) => {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setSmurf({
            ...smurf,
            [name]: value
        })
    }


    console.log('SMURF FORM', smurf)
    return(
        <div>
            <form>
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
            </form>
        </div>
    )
}

export default SmurfForm