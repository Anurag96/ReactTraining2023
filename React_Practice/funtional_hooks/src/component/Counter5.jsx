import React,{useState,useEffect} from 'react'

function Counter5() {

    const [isOn,setIsOn]=useState(false)
    useEffect=()=>{
        console.log('Executed'+Math.random()*10)
    }

  return (
    <div>
        <h1>useEffect Hoooks</h1>
      {!isOn &&(
        <button type='button' onClick={()=>setIsOn(true)}> <h1>Subscribe</h1></button>
      )}
      {isOn &&(
        <button type='button' onClick={()=>setIsOn(false)}> <h1>Successfuly UnSubscribe</h1></button>
      )}
    </div>
  )
}

export default Counter5
