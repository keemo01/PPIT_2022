import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Testing to see all wroks fine!, Link below shows BTC Chart
        </p>
        <a
          className="btc-chart"
          href="https://coinmarketcap.com/currencies/bitcoin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BTC Chart
        </a>
      </header>
    </div>
  );
}

export default App;
