import React from 'react'
import { Card } from './Styles'
import { CountryProps } from "../contexts/CountryContext"
import { Link } from "react-router-dom";


type Props = {
  item: CountryProps
}

const CountryCard = ({item}:Props) => {

  // console.log(item)
  return (
    <Card>
      <Link to={`/country/${item.name.common}`} style={{ textDecoration: "none" }}>
      <div className='img__container'>
        <img src={item.flags?.svg} alt='flag' />
      </div>

      <div className='content'>
          <h3>{item.name.common}</h3>
          <p><span>Population: {item.population}</span></p>
          <p><span>Region: {item.region}</span></p>
          <p><span>Capital: {item.capital?.[0]}</span></p>
      </div>
      </Link>
    </Card>
  )
}

export default CountryCard