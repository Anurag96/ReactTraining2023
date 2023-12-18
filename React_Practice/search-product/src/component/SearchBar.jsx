import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function SearchBar({ posts, setSearchResults }) {
    const handleSearchChange = (e) =>{
        if(!e.target.value) return setSearchResults(posts)

        const filterResult = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
        setSearchResults(filterResult)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <header>
            <form className='search' onSubmit={handleSubmit}>
                <input className='search__input' type='text' id='search' onChange={handleSearchChange} />

                <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

            </form>
        </header>
    )
}

export default SearchBar