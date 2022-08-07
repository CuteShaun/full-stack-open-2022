import React from "react";
import CountryCard from "../CountryCard/CountryCard";

const CountriesList = ({ countries = [], country, setCountry }) => {

  const renderList = (country) => {
    if (countries.length < 10 && countries.length > 1) {
      return (
        <div key={country.name.common}>
          <span>{country.name.common}</span>
          <button onClick={() => setCountry(country)}>show</button>
        </div>
      );
    } else {
      return <CountryCard key={country.name.common} country={country}/>
    }
  };

  const preparedList =
    countries.length >= 10
      ? "Too many matches specify another filter"
      : countries.map((country) => renderList(country));

  return <div>{country.name.common ? <CountryCard country={country} /> : preparedList}</div>;
};

export default CountriesList;

//todo 2.13
