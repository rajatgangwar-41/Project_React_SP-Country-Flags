import React, { useEffect, useState } from 'react'
import Search from './Search'
import DropdownBar from './DropdownBar'
import CountryCard from './CountryCard'
import offlineCountriesData from '../../countriesData';

const CountriesContainer = () => {

  // CountryData.sort((countryA, countryB) => 
  //   countryA.name.common.localeCompare(countryB.name.common)
  // );

  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => 
        res.json()
      )
      .then((data) => { 
        setCountriesData(data);
        console.log("Fetching: Online Data");
      })
      .catch((err) => { 
        setCountriesData(offlineCountriesData);
        console.log("Error: ", err);
        console.log("Fetching: Offline Data");
    })
  }, []);

  return (
    <main className='countries-container'>
        <div className="filter-section">
            <Search setQuery={setQuery}/>
            <DropdownBar setRegion={setRegion}/>
        </div>
        <div className="countries-list">
          {
            countriesData.filter((country) => 
              country.name.common.toLowerCase().includes(query)
            ).filter((country) => 
              country.region.includes(region) || country.subregion ?.includes(region)
            ).map((country) => {
              return (
                <CountryCard 
                  key={country.name.common}
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