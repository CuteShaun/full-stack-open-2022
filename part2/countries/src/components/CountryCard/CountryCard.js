import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryCard = ({ country }) => {
  const [forecast, setForecast] = useState({current: {}});
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const getForecast = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&units=metric&exclude=${["daily","hourly","minutely"]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
      setForecast(response.data);
      setIcon(response.data.current.weather[0].icon)
    };
    getForecast();
  }, [country.capitalInfo.latlng]);


  console.log(forecast, "forecast");


  const capital = country.capital[0];
  return (
    <section key={country.name.common}>
      <h1>{country.name.common}</h1>
      <div>
        <span>capital </span>
        <span>{capital}</span>
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

      <h2>Weather in {capital}</h2>

      <p>temperature {forecast?.current?.temp} Celcius</p>
      {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"></img>}
      <p>wind {forecast?.current?.wind_speed} m/s</p>
    </section>
  );
};

export default CountryCard;
