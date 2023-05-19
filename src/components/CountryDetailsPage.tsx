import React from 'react'
import { useParams, Link  } from "react-router-dom";
import CountryContext from '../contexts/CountryContext'
import {useContext} from "react"
import { MdKeyboardBackspace } from "react-icons/md"



type Props = {}

const CountryDetailsPage = (props: Props) => {
    const {countryDetails} = useContext(CountryContext)

    const params = useParams()

  const country = countryDetails.find(pok => pok.name.common === params.id)
//   console.log(country)

  return (
    <div>
        {/* <p>{country?.name.common}</p> */}
        <div>
            <Link to="/" style={{fontSize: "20px"}}>
                <MdKeyboardBackspace style={{fontSize: "27px"}}/>
                Back
            </Link>

            <div>
                <div className='img__cont'>
                    <img src={country?.flags?.svg} alt="flag" />
                </div>

                <div className='country__details'>
                    <h2>{country?.name.common}</h2>
                    <div className='details'>
                        <div>
                            <h5><span>Native Name:</span> {country?.altSpellings[1]}</h5>
                            <h5><span>Population:</span> {country?.population}</h5>
                            <h5><span>Region:</span> {country?.region}</h5>
                            <h5><span>Sub Region:</span> {country?.subregion}</h5>
                            <h5><span>Capital:</span> {country?.capital?.[0]}</h5>
                        </div>
                        <div>
                            <h5><span>Top Level Domain:</span> {country?.tld[0]}</h5>
                            <h5><span>Continents:</span> {country?.continents[0]}</h5>
                            <h5><span>timezones:</span> {country?.timezones[0]}</h5>
                        </div>

                        <div>
                            <h4><span>Car Stairing Side</span> {country?.car.side}</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CountryDetailsPage