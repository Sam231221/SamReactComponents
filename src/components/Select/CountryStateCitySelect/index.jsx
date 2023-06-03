import { City, Country, State } from "country-state-city";
import { useEffect, useState } from "react";
import Select from "./Select";
import './index.css'
const Index = () => {
    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = useState();
    const [cityData, setCityData] = useState();

    const [country, setCountry] = useState(countryData[0]);
    const [state, setState] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
        setStateData(State.getStatesOfCountry(country?.isoCode));
    }, [country]);

    useEffect(() => {
        setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
    }, [state]);

    useEffect(() => {
        stateData && setState(stateData[0]);
    }, [stateData]);

    useEffect(() => {
        cityData && setCity(cityData[0]);
    }, [cityData]);
    console.log(countryData)

    return (
        <section className="min-h-screen bg-zinc-100 px-3 grid place-items-center  pb-20 ">
            <div className=" ">
                <h2 className="text-2xl font-bold text-teal-900">
                    Country, State and City Selectors
                </h2>
                <br />
                <div className="flex bg-white flex-wrap gap-3 shadow-lg rounded-lg p-8">
                    <div>
                        <p className="text-teal-800 font-semibold">Country :</p>
                        <Select
                            data={countryData}
                            selected={country}
                            setSelected={setCountry}
                        />
                    </div>
                    {state && (
                        <div>
                            <p className="text-teal-800 font-semibold">State :</p>
                            <Select
                                data={stateData}
                                selected={state}
                                setSelected={setState}
                            />
                        </div>
                    )}
                    {city && (
                        <div>
                            <p className="text-teal-800 font-semibold">City :</p>
                            <Select data={cityData} selected={city} setSelected={setCity} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Index;