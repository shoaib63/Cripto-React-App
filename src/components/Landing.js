import React, { useState, useEffect } from 'react';

// API
import { getCoin } from '../services/api';

// Components
import Loader from './Loader';
import Coin from './Coin';

// Stylse
import styles from "./Landing.module.css"


const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search , setSearch] = useState(""); 




    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            setCoins(data);
        }

        fetchApi();
    }, [])


    const searchHandler = event =>{
        setSearch(event.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()));



    return (
        <>
            <input className={styles.input}  type="text" placeholder='Search...' value={search} onChange={searchHandler} />

            {
                coins.length ? 
                    <div className={styles.coinContainer}>
                        {
                            searchCoins.map(coin => <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image} 
                                symbol={coin.symbol}
                                price= {coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange = {coin.price_change_percentage_24h}
                            />)
                        }
                    </div> :
                    <Loader /> 
            }


        </>
    );
};

export default Landing;