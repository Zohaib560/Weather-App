import React from 'react'

const Search = ({ handleSearchCity, handleUnitsClick }) => {
  return (
    <div className="section section__inputs">
        <input onKeyDown={handleSearchCity} type="text" name="city" placeholder="Enter City"></input>
        <button onClick={handleUnitsClick}>°F</button>
    </div>
  )
}

export default Search