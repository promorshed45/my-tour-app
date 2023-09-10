const CountryData = ({country, handleVisitCountry, handleVisitedFlag}) => {
    return (
        <div>
            <p>Country Data: {country.name.common} </p>
        </div>
    );
};

export default CountryData;