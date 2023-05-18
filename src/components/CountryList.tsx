import React from 'react'
import Search from './Search'
import FilterBox from './FilterBox'
import { Wrapper } from './Styles'
import CountryCard from './CountryCard'
import {useContext} from "react"
import CountryContext from '../contexts/CountryContext'
import { CountryContextProps } from '../contexts/CountryContext' 


type Props = {
 
}

const CountryList = () => {
  const {countryDetails} = useContext(CountryContext)

  return (
    <Wrapper>
      <div className='main__wrapper'>
        <div className='search__filter'>
          <Search />
          <FilterBox />
        </div>


        <div className='card__wrapper'>

          {countryDetails.map((countryDetail) => {
            return <CountryCard item={countryDetail} />
          })}

        </div>
      </div>
    </Wrapper>
  )
}

export default CountryList