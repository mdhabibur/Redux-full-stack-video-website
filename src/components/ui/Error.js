import React from 'react'

const Error = ({message}) => {
  return (
    <div className='errorMessage'>
        <p>Error: {message} </p>
    </div>
  )
}

export default Error