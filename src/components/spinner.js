import React from 'react'
import Loading from './Loading.gif'

const Spinner = (props) => {
    const altText = "Loading"
    return (
        <div className='text-center'>
            <img src={Loading} alt={altText} style={{ height: "200px", width: '200px' }} />
        </div>
    )
}

export default Spinner
