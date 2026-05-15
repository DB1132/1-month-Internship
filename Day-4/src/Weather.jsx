import React from "react";
import { useState, useEffect } from "react";

export default function Weather() {
  const [Weather, setWether] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",
    )
      .then((response) => response.json)
      .then((data) => {
        console.log("data");
        setWether(data);
      })
      .catch((error) => console.log("error"));
  }, []);
  return (
    <div>
      <h1>Weather App</h1>

      {weather && (
        <div>
          <p>Timezone: {weather.timezone}</p>

          <p>
            First Temperature:
            {weather.hourly.temperature_2m[0]}°C
          </p>

          <p>
            First Time:
            {weather.hourly.time[0]}
          </p>
        </div>
      )}
    </div>
  );
}
