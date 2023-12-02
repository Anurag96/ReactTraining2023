import React,{useState} from 'react'

function Counter4() {

    const [numbers,setNumbers]= useState([])
    const addNumbers=()=>{
        setNumbers([...numbers,{
            id:numbers.length,
            value:Math.floor(Math.random() * 10) + 1
        }])
    }

  return (
    <div>
        <h1>UserSTate() hook with Arrays</h1>
        <button onClick={addNumbers}>Add a number</button>
        <ul>
            {numbers.map((num)=>{
                return<li key={num.id}>{num.value}</li>
            })}
        </ul>
    </div>
  )
}

export default Counter4

