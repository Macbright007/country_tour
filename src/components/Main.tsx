import React from 'react'
import CountryList from './CountryList'
import Nav from './Nav'
import { Container } from './Styles'

type Props = {}

const Main = (props: Props) => {
  return (
    <Container>
        <Nav />
        <CountryList />
    </Container>
  )
}

export default Main