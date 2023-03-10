import React, {useEffect, useState} from 'react';
import getCurrency from "../../api/cursValutApi";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";

const Home = () => {
    const [currencyList, setCurrencyList] = useState([])

    useEffect(() => {
        async function fetchCurrencyData() {
            const currencies = await getCurrency();
            if (currencies) {
                setCurrencyList(currencies)
            }
        }

        fetchCurrencyData().then()
    }, [])

    return (

        <div>
            {currencyList.length !== 0
                ? <div>
                    <Header currencyList={currencyList}/>
                    <Body currencyList={currencyList}/>
                </div>
                : <div>
                    LOADING
                </div>
            }

        </div>
    )
};

export default Home;