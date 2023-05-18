import React, { ReactNode } from 'react'
import Axios from 'axios';
import { createContext, useState, useEffect } from "react";

export const API_url = "https://restcountries.com/v3.1/all";

export type CountryContextProps = {
    countryDetails: CountryProps[];
}

type Props = {
    children?: ReactNode
}

export type CountryProps = {
    name: {
        common: string;
    };
    id: string;
    flags:{
        svg: string;
    };
    population: number;
    region: string;
    capital: string[];
}

// const CountryContext = createContext<CountryContextProps | ({})>;
const CountryContext = createContext<CountryContextProps>({countryDetails:[]});   

export const CountryProvider = ({ children }: Props) => {
    const [countryDetails, setCountryDetails] = useState<CountryProps[]>([])

    const fetchCountryDetails = async () => {
        try {
            const result = await Axios.get(API_url);
            setCountryDetails(result.data)
            // console.log(result.data)
        }
        catch (error) {
            throw error
        }
    }

    useEffect(() => {
        fetchCountryDetails()
    }, [])

    return (
        <CountryContext.Provider value={{countryDetails}}>
            {children}
        </CountryContext.Provider>
    )
}

export default CountryContext