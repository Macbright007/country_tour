import Ract, { useContext } from "react"
import { Card } from './Styles'
import { CountryProps } from "../contexts/CountryContext"
import { Link } from "react-router-dom";
import ThemeContext from '../contexts/ThemeContext';


type Props = {
  item: CountryProps
}

const CountryCard = ({item}:Props) => {
  const { theme } = useContext(ThemeContext);
 
  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "hsl(207, 26%, 17%)";

  const bodyStyle = {
      color: color,
      backgroundColor: backgroundColor,
  }
  // console.log(item)
  return (
    <Card style={bodyStyle}>
      <Link to={`/country/${item.name.common}`} style={{ textDecoration: "none",  color: "black" }}>
      <div className='img__container'>
        <img src={item.flags?.svg} alt='flag' />
      </div>

      <div className='content' style={bodyStyle}>
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