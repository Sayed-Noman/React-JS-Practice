import React, { useState } from 'react'
import { useState } from 'react';
import CountryCard from './CountryCard';
import CountriesData from '../countriesData'

const CountriesList = ({ query }) => {
    return (
        <div className="countries-container">
            {
                CountriesData.filter((country) => country.name.common.toLowerCase().includes(query))
                    .map((country) => (
                        <CountryCard
                            key={country.name.common}
                            flag={country.flags.svg}
                            name={country.name.common}
                            population={country.population.toLocaleString('en-IN')}
                            region={country.region}
                            capital={country.capital?.[0]}
                        />
                    ))
            }
        </div>
    )
}

export default CountriesList