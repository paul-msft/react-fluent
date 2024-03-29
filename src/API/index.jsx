import React, {useEffect, useState} from 'react';
import { Input, Field, Button, Card, Title3 } from "@fluentui/react-components";
import styles from './styles.module.css';
import { fetchData } from './apiModule.js';

export default function API() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("London");
  const [inputValue, setInputValue] = useState(location);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(inputValue);
  };

  // Convert temp to F for Max
  const convertTempToF = (temp) => {
    return ((temp * 9/5) + 32).toFixed(2);
  };

  useEffect(() => {
    fetchData(location)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, [location]);
  
  return (
    <>
    <div className={styles.apiContainer}>
      <form onSubmit={handleSubmit}>
        <Field label="Location" hint="Enter a location to query the weather">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a location"
        />
        </Field>
        <br />
        <Button type="submit">Search</Button>
      </form>
      {data && (
        <div className={styles.resultsContainer}>
          <Card>
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Current weather icon" style={{width: '50px', height: '50px'}} />            <Title3>
              Current weather in {data.name}
            </Title3>
            <p>The weather in <b>{data.name}</b> is currently <b>{data.weather[0].description}</b> with a temperature of <b>{data.main.temp}°C</b> <b>({convertTempToF(data.main.temp)}°F)</b>.</p>
          </Card>
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
    </>
  );
}