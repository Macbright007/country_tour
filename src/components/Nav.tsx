import React, { useContext } from 'react'
import { BsMoon } from "react-icons/bs"
import { Navigation } from './Styles'
import { Link } from "react-router-dom";
import ThemeContext from '../contexts/ThemeContext';


type Props = {}

const Nav = (props: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const color = theme === "light" ? "hsl(207, 26%, 17%)" : "light";
  const backgroundColor = theme === "light" ? "#FFF" : "hsl(209, 23%, 22%)";
  const colorText = theme === "dark" ? "light" : "dark";

  const navStyle = {
      color: color,
      backgroundColor: backgroundColor,
      border: `2px solid ${backgroundColor}`
  }
  return (
    <Navigation style= {navStyle}>
      <div className='nav__nav'>
        <Link to="/" style={{ fontSize: "20px", textDecoration: "none", }}>
          <h1>Where in the world?</h1>
        </Link>
        <div className='left__side'>
          <BsMoon style={{ fontWeight: "700", marginRight: "0.3rem" }} />
          <span onClick={toggleTheme} style={{color: color}}>Dark Mode</span>
        </div>
      </div>
    </Navigation>
  )
}

export default Nav