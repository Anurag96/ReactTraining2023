import React from 'react'
import { useState } from 'react'

function Forms() {
    const [formData,setFormData] = useState({
        name:'',
        major:''
    })
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log('form submitted',formData)   
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Email Name</label>
                    <input type="text" class="form-control"  name='name' placeholder="Enter Name" value={formData.name} onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Enter Major</label>
                    <input type="text" class="form-control" name='major' placeholder="Enter Major" value={formData.major} onChange={handleChange}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <button type='submit'>Subnit</button>
        </div>
    )
}

export default Forms
