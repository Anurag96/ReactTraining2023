import React from 'react'
import { increment, decrement, reset, incrementByAmount } from './CounterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
const Counter = () => {
  //Helps to connect with Reduc
  const count = useSelector((state) => state.counter.count)
  console.log(count + " Hello")
  const [incrementAmount, setIncrementByAmount] = useState(0)
  const resetAll = () => {
    setIncrementByAmount(0)
    dispatch(reset())
  }

  //DISPATCH 
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input type='text' value={incrementAmount} onChange={(e) => setIncrementByAmount(e.target.value)} />
      <button onClick={() => { dispatch(incrementByAmount(Number(incrementAmount))) }}>Add </button>
      <button onClick={resetAll}>Clear</button>

    </div>
  )
}

export default Counter
