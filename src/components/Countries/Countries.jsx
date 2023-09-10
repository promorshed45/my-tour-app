import { useEffect } from "react";
import { useState } from "react";

import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitCountries, setVisitCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitCountry = country => {
        const newvisitCountries = [...visitCountries, country];
        setVisitCountries(newvisitCountries);
    }

    const handleVisitedFlag = flag =>{
        const newVisitedFlag = [...visitedFlag,flag];
        setVisitedFlag(newVisitedFlag);
    }
    return (
        <div> 
            <h3>Countries: {countries.length}</h3> 
            {/* visited country */}
            <div>
                <h4>Visited Countries: {visitCountries.length}</h4>
                <ul>        
                {
                    visitCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlag.map((flag,idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="countr-container">
            {
                countries.map(country => <Country key={country.cca3} handleVisitCountry={handleVisitCountry}
                handleVisitedFlag ={handleVisitedFlag}
                country={country}></Country>)
            } 
            </div>  
        </div>
    );
};

export default Countries;