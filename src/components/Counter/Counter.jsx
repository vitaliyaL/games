import React from 'react'
import { useState } from 'react'
import './Counter.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Counter() {
const [count, setCount]=useState(0)
const inc =()=>{
    setCount(count+1)
}
const dec =()=>{
    setCount(count-1)
}
  return (
    <div className='like'>
       <button onClick={inc}> <ThumbUpIcon/></button>
       <p>   {count}</p>
       <button onClick={dec}><ThumbDownIcon/></button>
    </div>
  )
}

export default Counter