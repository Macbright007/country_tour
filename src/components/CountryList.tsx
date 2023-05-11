import React from 'react'
import Search from './Search'
import FilterBox from './FilterBox'
import { Wrapper } from './Styles'

type Props = {}

const CountryList = (props: Props) => {
  return (
    <Wrapper>
      <div className='main__wrapper'>
        <div className='search__filter'>
          <Search />
          <FilterBox />
        </div>
      </div>
    </Wrapper>
  )
}

export default CountryList