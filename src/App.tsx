import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h2>Welcome Neighbors from Santa Teresa 2 townhomes.</h2>
        <p>Our community pool is set to be <b>CLOSED</b> another year unless we speak up.</p>

        <p>Please join me this <a href="https://zoom.us/j/4410159799?pwd=M3h1clk4azgzb3IzN0R1aHlwTitHQT09"><b>Tuesday May 18th at 7:00pm</b></a> at our board meeting to request the pool open on May 21st</p>

        <p style={{ padding: '0 40px', fontSize: '20px'}}>
          <h4>Statement from the CDC on Feb 21st 2021</h4>
          <p>
            <i>There is no evidence that SARS-CoV-2, the virus that causes COVID-19, can spread to people through water in these places</i>
          </p>
        </p>
      </div>
      <div className="App">
        Meeting starts in: 42 hours 
      </div>
    </>
  );
}

export default App;
