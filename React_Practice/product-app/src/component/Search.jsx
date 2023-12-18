import React from 'react'

function Search({data,setFilterData}) {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleChange = (e) =>{
        if(!e.target.value) return setFilterData(data)
        const filterVal = Object.values(data).filter((jsn) => jsn.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilterData(filterVal)
    }
    return (
        <form className="input-group mb-3" onSubmit={handleSubmit}>
            <input type="text" className="form-control" onChange={handleChange} placeholder="Search results.." aria-describedby="button-addon2" />
            <button type="submit" className="btn btn-outline-secondary" id="button-addon2">Search</button>
        </form>
    )
}

export default Search