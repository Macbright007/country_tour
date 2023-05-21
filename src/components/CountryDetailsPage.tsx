import { useParams, Link } from "react-router-dom";
import CountryContext from '../contexts/CountryContext'
import Ract, { useContext } from "react"
import { MdKeyboardBackspace } from "react-icons/md"
import { DetailWrapper } from './Styles';
import ThemeContext from '../contexts/ThemeContext';



type Props = {}

const CountryDetailsPage = (props: Props) => {
    const { countryDetails } = useContext(CountryContext)
    const { theme } = useContext(ThemeContext);
    const params = useParams()

    const country = countryDetails.find(pok => pok.name.common === params.id)
    //   console.log(country)

    const color = theme === "light" ? "#333" : "#FFF";
    const backgroundColor = theme === "light" ? "#FFF" : "hsl(207, 26%, 17%)";

    const NavLink = { 
        width: "100px",
        fontSize: "20px", 
        color: "black", 
        textDecoration: "none", 
        padding: ".2rem .4rem",
        marginTop: "2rem",
        boxShadow: "1px 1px 12px rgb(207, 205, 205)",
        borderRadius: "10px",
        background: "rgb(255 255 255)",
        display: "flex",
    }

    const bodyStyle = {
        color: color,
        backgroundColor: backgroundColor,
    }

    
  
    return (
        <DetailWrapper style={bodyStyle}>
            {/* <p>{country?.name.common}</p> */}
            <div className='inner__wrapper'>
                <Link to="/" style={NavLink}>
                    <MdKeyboardBackspace style={{ fontSize: "22px", marginTop: ".2rem"}} />
                    <span style={{marginLeft: ".7rem"}}>Back</span>
                </Link>

                <div className='detail_content'>
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
                        </div>

                        <h4><span>Car Stairing Side:</span> {country?.car.side}</h4>
                    </div>
                </div>
            </div>

        </DetailWrapper>
    )
}

export default CountryDetailsPage