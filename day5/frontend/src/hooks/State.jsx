//import React from 'react'
import { useState } from "react"
const State = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
  return (
    <div>
        <h1>UseState example</h1>
        <h3>Like Count: {like}</h3>
        <button onClick={()=>setLike(like+1)}>👍</button>
        <button onClick={()=>setLike(like-1)}>👎</button>
    </div>
  )
}

export default State