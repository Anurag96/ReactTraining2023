import React from 'react'
import { OrganizationContext,CourseContext } from '../App'
import { useContext } from 'react'
function ComponentZ() {
    const organisation = useContext(OrganizationContext)
    const course = useContext(CourseContext)
  return (
    <div>
      <h1>Component z</h1>
      {organisation}
      <hr/>
      {course}
    
    </div>
  )
}

export default ComponentZ
