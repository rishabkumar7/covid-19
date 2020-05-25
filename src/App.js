import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteGrid from "./Grid";
function App() {
  useEffect(() => {
    fetch("https://disease.sh/v2/all")
      .then(res => res.json())
      .then(data => {
        setWorldStats(data);
      });
    return () => { };
  }, []);
  useEffect(() => {
    fetch("https://disease.sh/v2/countries/canada")
      .then(res => res.json())
      .then(data => {
        setdailyStats(data);
      });
    return () => { };
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v2/historical/canada")
      .then(res => res.json())
      .then(data => {
        setHistoricalData(data);
      });
    return () => { };
  }, []);
  const [dailyStats, setdailyStats] = useState({});
  const [historicalData, setHistoricalData] = useState({});
  const [worldStats, setWorldStats] = useState({});

  return (
    <div className="App">
      <SiteGrid
        deaths={dailyStats && dailyStats.deaths}
        recovered={dailyStats && dailyStats.recovered}
        cases={dailyStats && dailyStats.cases}
        today={dailyStats && dailyStats.todayCases}
        timeline={historicalData && historicalData.timeline}
        world={worldStats}
      />

      <div className="footer">
        Developed by{" "}
        <a href="https://github.com/rishabkumar7">Rishab Kumar</a>
      </div>
    </div>
  );
}

export default App;
