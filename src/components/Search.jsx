import React from 'react'

const Search =({setQuery}) => {
  return (
    <div className='search-section'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
          type="text" 
          placeholder="Search for a country..." 
          onChange={(e) => setQuery(e.target.value.toLowerCase())}   
        />
    </div>
  )
}

export default Search