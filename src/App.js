import './App.css';
import Coin from './Coin';
import React ,{useState, useEffect} from 'react'
import axios from 'axios'
function App() {
const [coins,setCoins]=useState([])
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
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

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coint-text'>
          Search a currency
        </h1>
        <form >
          <input type='text' placeholder='search' className='coint-input' onChange={handleChange}/>
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
