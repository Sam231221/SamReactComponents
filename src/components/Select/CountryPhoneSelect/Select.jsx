import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Select() {
    const [country, setCountry] = useState("Select a Country")
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState();

    const [loadingState, setLoading] = useState(true)
    const [errorState, setError] = useState({ hasError: false, message: "" })
    const fetchCountries = async () => {
        //Axios provides  direct way access of data and provides us error details which fetch dont give.
        try {
            const res = await axios.get('https://restcountries.com/v3.1/all')
            setCountries(res.data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
            setLoading(false)
        } catch (error) {
            //Axios catching errors.
            // console.log("error:", error.response.status)
            setError({ hasError: true, message: error.message })
            setLoading(false)
        }
    }

    const handleSelectOnChange = (val) => {
        setCountry(val)
        let ctryObj = countries.find(ctry => {
            if (ctry.name.common === val) {
                console.log('adas')
                return ctry

            }
        })
        setSelectedCountry(ctryObj)
    }



    useEffect(() => {
        fetchCountries()
    }, [])

    if (loadingState) {
        return (
            <div>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
    if (errorState.hasError) {
        <div>
            {errorState.message}
        </div>
    }
    return (
        <div className='content mt-5'>
            <div className='select-box'>
                <div className="form-field">
                    <label htmlFor="">Country: </label>
                    <select
                        onChange={(e) => handleSelectOnChange(e.target.value)}
                        className='countryselect'>
                        <option value={country}>{country}</option>
                        {loadingState && <div>Loading...</div>}
                        {countries.length > 0 ?
                            <>

                                {countries.map((c, i) => (
                                    <option key={i}>
                                        {c.name.common}
                                    </option>
                                ))}
                            </> : "None"

                        }
                    </select>
                </div>
                <div className="form-field flex align-center mt-5">
                    <label htmlFor="">Phone: </label>
                    <div className='phone-field'>
                        {selectedCountry && <>
                            <div className="img-fluid"> <img src={selectedCountry.flags.png} className='flag' /></div>
                            <div className='code'>{selectedCountry.idd.root}{selectedCountry.idd.suffixes}</div>
                        </>


                        }
                        <input type="text" name="" id="" />
                    </div>
                </div>

            </div>


        </div>
    )
}
