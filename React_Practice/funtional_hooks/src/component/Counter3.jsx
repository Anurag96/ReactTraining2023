import React,{useState} from 'react'

function Counter3() {
    
    const initialCount = 0
    const [count,setCount] =  useState(initialCount)

    const incrementByTwo = ()=>{
        setCount(prevCount=>prevCount+2)
    }
  return (
    <div>
        <h1>useState() with Prev State</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(temp =>temp+1)}>+</button>
        <button onClick={()=>setCount(temp =>temp-1)}>-</button>
        <button onClick={incrementByTwo}>Increment by 2</button>
    </div>
  )
}

export default Counter3
