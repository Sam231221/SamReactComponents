import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SearchBox1 } from './SearchBox1'
import './index.css'
const AutoComplete = () => {
    const [countries, setCountries] = useState([])
    const [countryMatch, setCountryMatch] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        const loadCountries = async () => {
            const response = await axios.get('https://restcountries.com/v3.1/all')
            setCountries(response.data)
        }
        loadCountries()

    }, [])
    const searchCountries = (text) => {
        console.log(text)
        console.log(countries[1].name.common)

        let filteredData = countries.filter(country => country.name.common == text)
        console.log('d:', filteredData)
        setCountryMatch(filteredData)

    }

    return (
        <>
            <div className='search-box'>
                <h2>AutoComplete</h2>

                   <SearchBox1  searchCountries={searchCountries}/>
            </div>
            {countryMatch && countryMatch.map((item, index) => (
                <div className='search-results' key={index}>
                    <p>{item.name.common}</p>

                </div>

            ))}
        </>
    )
}
//export default AutoComplete;
//do this way for routes.js and layouting to work properly.
export default AutoComplete;
