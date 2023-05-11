import React from 'react'
import { BsMoon } from "react-icons/bs"
import { Navigation } from './Styles'

type Props = {}

const Nav = (props: Props) => {
  return (
    <Navigation>
      <div className='nav__nav'>
        <h1>Where in the world?</h1>
        <div className='left__side'>
          <BsMoon style={{fontWeight: "700", marginRight: "0.3rem"}}/>
          <span>Dark Mode</span>
        </div>
      </div>
    </Navigation>
  )
}

export default Nav