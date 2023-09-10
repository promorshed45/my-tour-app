import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    //const {country, handleVisitCountry, handleVisitedFlag} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
            country={country}
            handleVisitCountry={handleVisitCountry}
            handleVisitedFlag={handleVisitedFlag}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;