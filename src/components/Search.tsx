import React from 'react'
import {ImSearch} from "react-icons/im"
import { SearchCont } from './Styles'

type Props = {}

const Search = (props: Props) => {
  return (
    <SearchCont>
      <ImSearch style={{fontWeight: "900", color: "gray", fontSize: "18px", marginRight: "0.8rem"}}/>
      <input type='search' placeholder='Search for a country...' />
    </SearchCont>
  )
}

export default Search