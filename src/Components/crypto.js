//combines two operations
import React from 'react';
import { CryptoItem } from './cryptoItem';

export class Crypto extends React.Component{

    render() {
        //class property // .crypto collection of crypto //special map fucntion to break them up into individual cryptos
        return this.props.crypto.map((crypto) => {
            return <CryptoItem crypto={crypto} ReloadData= {this.props.ReloadData}></CryptoItem>
        })
    }

}