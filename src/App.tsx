import { useEffect, useState } from "react";
import "./App.css";

const getTimeRemaining = (total: number) => {
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const meetingStart = 1621389600000;
const url = "https://zoom.us/j/4410159799?pwd=M3h1clk4azgzb3IzN0R1aHlwTitHQT09";

function App() {
  const [timeLeft, setTimeLeft] = useState(meetingStart - Date.now());
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = meetingStart - Date.now();
      if (diff < 0) {
        setStarted(true);
      }
      setTimeLeft(diff);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (started) {
      window.open(url);
    }
  };

  const { days, hours, minutes, seconds } = getTimeRemaining(timeLeft);
  console.log();

  return (
    <div onClick={handleClick}>
      <div className="App">
        <h2>Welcome Neighbors from Santa Teresa 2 townhomes.</h2>
        <p>
          Our community pool is set to be <b>CLOSED</b> another year unless we
          speak up.
        </p>
        <p style={{ marginBottom: "35px" }}>
          Please join me this{" "}
          <a href={url}>
            <b>Tuesday May 18th at 7:00pm</b>
          </a>{" "}
          at our board meeting to request the pool open on May 21st
        </p>
        <p>
          Meeting starts in:{" "}
          <span style={{ marginBottom: "20px" }}>
            <b>{hours + days * 24}</b> hours, <b>{minutes}</b> minutes and{" "}
            <b>{seconds}</b> seconds
          </span>
        </p>
      </div>
      <div className="App">
        <div style={{ padding: "0 40px", fontSize: "20px" }}>
          <h4>Statement from the CDC on Feb 21st 2021 regarding pools</h4>
          <p>
            <i>
              There is no evidence that SARS-CoV-2, the virus that causes
              COVID-19, can spread to people through water in these places
            </i>
          </p>
          <p>
            <i>There has been 0 covid cases traced to swimming pools.</i>
            <h3>It's time to open our Pool!</h3>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
