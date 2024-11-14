import Search from "../search";
import { useState } from "react";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);


  async function handleSearch() {
    
  }

  return (
    <div>
      <Search 
      search={search} 
      setSearch={setSearch} 
      handleSearch={handleSearch}
      />
      Weather
    </div>
  );
}
