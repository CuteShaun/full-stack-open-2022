import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import CountriesList from "./components/CountriesList/CountriesList";
import CountryFilter from "./components/CountryFilter/CountryFilter";

const App = () => {
    const [allCountries, setAllCountries] = useState([]);
    const [filtered, setFilteredCountries] = useState([]);
    const [country, setCountry] = useState({name: {}});


    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            setAllCountries(response.data);
        }
        getCountries();
    }, []);

    const handleFilter = ({ target }) => {
        if (target.value) {
            const filtered = allCountries.filter((country) =>
                country.name.common.trim().toLowerCase().includes(target.value.toLowerCase().trim())
            );
            setFilteredCountries(filtered);
        }
    };

    const clearFilter = () => {
        setCountry({name: {}});
    }
    
    return (
        <>
            <CountryFilter handleFilter={handleFilter} country={country} clearFilter={clearFilter}/>
            <CountriesList countries={filtered} country={country} setCountry={setCountry} />
        </>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
