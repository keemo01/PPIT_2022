import React from 'react';
import './exchange.css';

export class Exchanges extends React.Component {
    render() {
        return (
            <div className='exchange-container'>
                <div className='exchange-row'>
                    <div className='exchange'>
                        <img src = "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png"></img>
                        <a href="https://www.binance.com/en"><h4>Binance</h4></a>

                        <h6>Binance has 28.6 million users as of October 2021</h6>
                    </div>
                </div>
            </div>
        );
    }
}
