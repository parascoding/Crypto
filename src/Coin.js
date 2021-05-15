import React from 'react'
import './Coin.css'
const Coin = ({ name, image, symbol, price, change}) => {
    let neg=false;
    let temp = change;
    if(temp<0)
    neg=true;
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt="crypto"></img>
                    <h1>
                        {name}
                    </h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>
                        Rs. {price}
                    </p>
                    
                    <p className={neg?"coin-percentage-neg":"coin-percentage-pos"}>
                        {change}%
                    </p>    
                </div>
            </div>
        </div>
    )
}
export default Coin