import React,{useState} from 'react'

function Counter() {

    const [counter,setCounter] = useState(0)
    const setCounterFun = () =>{
        let count = counter+1
        setCounter(count)
    }

  return (
    <div>
      <h1>You have clicked {counter} times</h1>
      <button onClick={setCounterFun}> Click me</button>
    </div>
  )
}

export default Counter
