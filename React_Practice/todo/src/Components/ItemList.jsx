import React,{useState} from 'react'
import { Checkmark } from 'react-checkmark'

function ItemList({task,index,completeTask}) {
  return (
    <>
    <ul>
        <li>
        <div><input type="checkbox" id="checkbox"  onClick={()=>completeTask(index)}/> 
        {task.title} 
        {task.completed ===true? 
        
        (<div style={{marginLeft:'9rem',marginTop:'-1rem'}}><Checkmark size='16px' /></div>):(<div></div>)
        
        }
        </div>
        </li> 
        </ul> 
    </>
  )
}

export default ItemList