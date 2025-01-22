import React from 'react'
import Search from './Search'
import DropdownBar from './DropdownBar'
import CountryCard from './CountryCard'
import CountryData from '../../countriesData';

const CountriesContainer = () => {
  // CountryData.sort((countryA, countryB) => {
  //   return countryA.name.common.localeCompare(countryB.name.common);
  // });
  return (
    <main className='countries-container'>
        <div className="filter-section">
            <Search />
            <DropdownBar />
        </div>
        <div className="countries-list">
          {
            CountryData.map((country) => {
              return (
                <CountryCard 
                  flagURL={country.flags.svg}
                  countryName={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
              />)
            })
          }
        </div>
    </main> 
  )
}

export default CountriesContainer