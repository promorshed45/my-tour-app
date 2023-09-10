import './Country.css'
import { useState } from "react";
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({country, handleVisitCountry, handleVisitedFlag}) => {
    const {name, flags, capital,population} = country;

    const [visited, setVisited ] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    const passWithParams = () => handleVisitCountry(country);

    // className={`country ${visited && 'visited'}`}
    return (
        <div className={`country ${visited ? 'visited' : 'no-visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="Country Flags"/>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <button onClick={passWithParams}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going' }</button>
            {visited ? '  I have visited this country' : 'I want to visit'}
            <hr />
            <CountryDetails 
            country={country}
            handleVisitCountry={handleVisitCountry}
            handleVisitedFlag={handleVisitedFlag}
            ></CountryDetails>
        </div>
    );
};

export default Country;