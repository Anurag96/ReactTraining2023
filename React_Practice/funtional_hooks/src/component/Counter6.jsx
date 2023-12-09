import React,{useEffect,useState} from 'react'
import axios from 'axios';

function Counter6() {
   
   const [albums,setAlbums]= useState([]) 

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(res=>{
        console.log(res)
        setAlbums(res.data)
    })
   },[])

  return (
    <div>
      {
        albums.map((albums)=>{
            return(
                <li key={albums.id}>{albums.title}</li>
            )
        })
      }
    </div>
  )
}

export default Counter6
