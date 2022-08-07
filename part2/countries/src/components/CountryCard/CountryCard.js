import React from 'react';

const CountryCard = ({country}) => {
    return (
        <section key={country.name.common}>
          <h1>{country.name.common}</h1>
          <div>
            <span>capital </span>
            <span>{country.capital[0]}</span>
          </div>
          <div>
            <span>area </span>
            <span>{country.area}</span>
          </div>
  
          <h3>languages</h3>
  
          <ul>
            {Object.values(country.languages).map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
  
          <img src={country.flags.png} alt={`${country.name.common} country flag`}></img>
        </section>
      );
}

export default CountryCard;
