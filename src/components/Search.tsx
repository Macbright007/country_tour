import React from 'react'
import {ImSearch} from "react-icons/im"
import { SearchCont } from './Styles'

type SearchProps = {
  onChange: (val: string) => void
  searchValue: string
}

const Search = ({ onChange, searchValue }: SearchProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }


  return (
    <SearchCont>
      <ImSearch style={{fontWeight: "900", color: "gray", fontSize: "18px", marginRight: "0.8rem"}}/>
      <input type='search' placeholder='Search for a country...' onChange={handleChange} />
    </SearchCont>
  )
}

export default Search