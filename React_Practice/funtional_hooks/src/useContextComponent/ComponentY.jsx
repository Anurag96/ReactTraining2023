import React from 'react'
import ComponentZ from './ComponentZ'
import { CourseContext } from '../App'
import { useContext } from 'react'

function ComponentY() {
  const [course, setContext] = useContext(CourseContext)
  return (
    <div>
      <h1>This is Y</h1>
      {course}
      <button onClick={()=>setContext('changed')}>change</button>
      <ComponentZ/>
    </div>
  )
}

export default ComponentY
