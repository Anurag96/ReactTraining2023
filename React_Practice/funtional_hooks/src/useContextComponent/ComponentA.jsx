import React from 'react'
import ComponentX from './ComponentX'
import { OrganizationContext } from '../App'
import { useContext } from 'react'
function ComponentA() {
    const organisation = useContext(OrganizationContext)
  return (
    <div>
        <h1>Component A</h1>
        {organisation}
    </div>
  )
}

export default ComponentA
