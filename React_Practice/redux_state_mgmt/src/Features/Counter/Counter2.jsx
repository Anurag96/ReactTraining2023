import React from 'react'
import { addNumber, subNumber, incrementByAmount, userName } from './NumberSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
function Counter2() {
  const number = useSelector((state) => state.number.count)
  const user = useSelector((state) => state.number.name)
  const [incrementAmount, setIncrementByAmount] = useState(0)
  const [incrementAmount2, setIncrementByAmount2] = useState(0)
  const [value, setValue] = useState(0)
  const [name, setName] = useState('')
  //DISPATCH 
  const dispatch = useDispatch();

  const handleMe = () => {
    setValue((Number(incrementAmount) + Number(incrementAmount2)))
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(userName(name));
  }
  const handleChangeName = (text) => {
    setName(text);
  };
  return (
    <div>
      <div><h1>{number}</h1>
        <input type='text' value={incrementAmount} onChange={(e) => setIncrementByAmount(e.target.value)} />
        <input type='text' value={incrementAmount2} onChange={(e) => setIncrementByAmount2(e.target.value)} />
        <button onClick={handleMe}>BumP</button> Bump : {value}<br />
        <button onClick={() => { dispatch(addNumber(Number(incrementAmount))) }}>+ </button>
        <button onClick={() => { dispatch(subNumber(Number(incrementAmount))) }}>- </button>
        <button onClick={() => { dispatch(incrementByAmount(Number(incrementAmount))) }}>Add </button><br />
      </div>

      <input type='text' value={name} onChange={(e) => handleChangeName(e.target.value)} />
      <button onClick={handleSubmitForm}>Add </button><br />
      <div>User: {user} </div><br />

    </div>
  )
}

export default Counter2
