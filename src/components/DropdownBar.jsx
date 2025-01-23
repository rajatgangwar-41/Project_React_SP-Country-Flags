import React from 'react'

const DropdownBar = ({ setRegion }) => {
  return (
      <select name="Region" className='dropDownBar-section' onClick={(e) => setRegion(e.target.value)}>
        <option value="" hidden="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
  )
}

export default DropdownBar