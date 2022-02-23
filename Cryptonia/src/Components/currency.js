import "../App.css";
import React, { useEffect, useState } from "react";
import Coin from "./Coin.js";
import Axios from "axios";

function Currency() {
    //state that represetns list of coins, has empty array
    const [coins, setCoins] = useState([]);
    //maps through data of input
    const [search, setSearch] = useState('');

    //hooks that run immediatly wehn page rerenders
    useEffect(() => {
        //axios is used to get http request // api shows coins and their data, you can change the number of coins that are shown on the page by achanging the "page=20" to how ever aamount you want shown
        Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false')
            //promise that is used to hook up a handler that will be called when the promise is resolved
            .then(res => {

                setCoins(res.data);
                console.log(res.data);
            })
            //lets you know if there are any errors
            .catch(error =>
                console.log(error));
        //dependancy array that stops it running constantly
    }, []);

    //handle change function 
    const handleChange = e => {
        setSearch(e.target.value);
    };

    //filter that loops through list and keeps only the elements that meet the condition e.g keeps elements that match the search word
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h3 className='coin-text'>Search For Coins</h3>
                <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </div>
            {/* filters through coins */}
            {filteredCoins.map(coin => {
                return (
                    //returns coin componenets
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                );
            })}
        </div>
    );
}
export default Currency;