import React from "react";

const CountryFilter = ({ handleFilter = () => {}, clearFilter, country }) => (
  <>
    <span>find countries </span>
    <input type="text" onChange={(e) => {
        if(country.name.common) {
            clearFilter();
            handleFilter(e) 
        }

        handleFilter(e);
    }} />
  </>
);

export default CountryFilter;
