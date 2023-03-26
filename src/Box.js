import React from 'react'
import './style.css'

function Box(props) {
  return (
    <div className='box' onClick={props.data2}>
        <h2>{props.data1}</h2>
    </div>
  )
}

export default Box