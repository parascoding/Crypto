import React from 'react'
import './Coin.css'

const Coin = ({ name, image, symbol, price, change}) => {
    let neg=false;
    let temp = change;
    if(temp<0)
    neg=true;
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    price=numberWithCommas(price);
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
                    ₹ {price}
                    
                    
                    </p>
                    
                    {/* <p className={neg?"coin-percentage-neg":"coin-percentage-pos"}>
                        {change.toFixed(2)}%
                    </p>     */}
                    {neg?<p className='coin-percentage-neg'>{change.toFixed(2)}%</p>: <p className="coin-percentage-pos">{change.toFixed(2)}%</p>}

                </div>
            </div>
        </div>
    )
}
export default Coin