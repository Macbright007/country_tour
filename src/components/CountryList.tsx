import React from 'react'
import Search from './Search'
import FilterBox from './FilterBox'
import { Wrapper } from './Styles'
import CountryCard from './CountryCard'
import {useContext, useState} from "react"
import CountryContext from '../contexts/CountryContext'
import ThemeContext from '../contexts/ThemeContext';



const CountryList = () => {
  const {countryDetails} = useContext(CountryContext)
  const { theme } = useContext(ThemeContext);

  const [searchValue, setSearchValue] = useState("")

  // function to handle search input
  const handleSearchChange = (val: string) => { 
    setSearchValue(val)
  }


  // function to filter on search
  const filteredCountrys = searchValue !== "" ?
    countryDetails?.filter((countryItem) => countryItem.name?.common.toLowerCase().includes(searchValue.toLowerCase()))
    : countryDetails

    const color = theme === "light" ? "#333" : "#FFF";
    const backgroundColor = theme === "light" ? "#FFF" : "hsl(207, 26%, 17%)";
  
    const bodyStyle = {
        color: color,
        backgroundColor: backgroundColor,
        border: `2px solid ${backgroundColor}`
    }

  return (
    <Wrapper style={bodyStyle}>
      <div className='main__wrapper'>
        <div className='search__filter'>
          <Search onChange={handleSearchChange} searchValue={searchValue} />
          <FilterBox />
        </div>


        <div className='card__wrapper'>
        {filteredCountrys.length < 1 && <p className='para'>No country found</p>}
          {filteredCountrys.map((countryDetail) => {
            return <CountryCard item={countryDetail} />
          })}

        </div>
      </div>
    </Wrapper>
  )
}

export default CountryList