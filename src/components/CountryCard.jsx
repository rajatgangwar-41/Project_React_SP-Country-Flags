import React from 'react'

const CountryCard = ({flagURL, countryName, population, region, capital}) => {
  return (
    <a href="/" className='countryCard-section'>
      <img src={flagURL} title={countryName + " Flag"} />
      <div className="text-section">
          <div className="country-name">{countryName}</div>
          <div className="country-data">
            <div>Population: {population.toLocaleString('en-IN')}</div>
            <div>Region: {region}</div>
            <div>Capital: {capital}</div>
          </div>
      </div>
    </a>
  )
}

export default CountryCard