import Search from "../search";
import { useState, useEffect } from "react";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=3faa9dbdda574dfbe70e6ed0158fb895`
      );

      const data = await response.json();
      console.log(data, "data");

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }


  function getCurrentDate() {
    return new Date().toLocaleDateString('UTC', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }


  useEffect(() => {
    fetchWeatherData("Beograd");
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="city-name">
          <h2>
            {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
          </h2>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
