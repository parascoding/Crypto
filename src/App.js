import './App.css';
import Coin from './Coin';
import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import './Coin.css'
import Btc from './Btc'

function App(props) {
const [coins,setCoins]=useState([])
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=5&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data);
      // console.log(res.data);
    })
    .catch(error=>console.log(error));
  },[]);
const[search, setSearch]=useState(''); 
const handleChange=e=>{
  setSearch(e.target.value);
}
const filteredCoins=coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )
const display=()=>{
  <Btc />
}
return (

  <div className="coin-app">
    <div className="button">
      <button onClick={display}>kick me</button>
    </div>
    <div className='coin-search'>
      <h1 className='coint-text'>
        Search a currency
      </h1>
      <form >
        <input type='text' placeholder='Search' className='coin-input' onChange={handleChange}/>
      </form>
    </div>
      {filteredCoins.map(coin=>{
        return(
          <Coin 
          key={coin.id} name={coin.name} image={coin.image} price={coin.current_price} symbol={coin.symbol}
          />
        );
      })}
  </div>
);
}

export default App;
