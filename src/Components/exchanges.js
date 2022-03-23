import React from "react";
import "./exchange.css";
import binance from "../images/binance.png";
import kraken from "../images/kraken.png";
import coinbase from "../images/coinbase.png";
import cro from "../images/cro.png";
import kucoin from "../images/kucoin.png";
import bybit from "../images/bybit.png";
import ftx from "../images/ftx.png";

const data = [
  {
    img: <img src={binance} />,
    exchange: <a href="https://www.binance.com/en">Binance</a>,
    visits: "24,448,014",
  },
  {
    img: <img src={kraken} />,
    exchange: <a href="https://www.kraken.com/">Kraken</a>,
    visits: "1,851,046",
  },
  {
    img: <img src={coinbase} />,
    exchange: <a href="https://www.coinbase.com/">Coinbase</a>,
    visits: "2,952,564",
  },
  {
    img: <img src={cro} />,
    exchange: <a href="https://www.crypto.com/">Crypto</a>,
    visits: "2,518,077",
  },
  {
    img: <img src={kucoin} />,
    exchange: <a href="https://www.kucoin.com/">KuCoin</a>,
    visits: "3,280,351",
  },
  {
    img: <img src={bybit} />,
    exchange: <a href="https://www.bybit.com/">ByBit</a>,
    visits: "3,600,673",
  },
  {
    img: <img src={ftx} />,
    exchange: <a href="https://www.ftx.com/">FTX</a>,
    visits: "4,294,539",
  },
];

export class Exchanges extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Top Exchanges</h2>
        <table>
          <tr>
            <th>Exchange</th>
            <th>Name</th>
            <th>Weekly Visits</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.img}</td>
                <td>{val.exchange}</td>
                <td>{val.visits}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
