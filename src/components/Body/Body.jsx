import React, {useEffect, useState} from 'react';
import styles from './Body.scss'
import convertImage from '../../../public/favicon.png'
import SelectBur from "../SelectBur/SelectBur";


const Body = ({currencyList}) => {
    const [currencyName, setCurrencyName] = useState('USD')
    const [convertedCurrencyName, setConvertedCurrencyName] = useState('UAH')
    const [currencyPrice, setCurrencyPrice] = useState(1)
    const [convertedCurrencyPrice, setConvertedCurrencyPrice] = useState(getPrice(currencyName))

    function getPrice(name) {
        const ticker = currencyList.filter(item => item.cc === name)
        return ticker[0]?.rate
    }

    const updatePrice = (name, newPrice) => {
        if (name === currencyName) {
            setCurrencyPrice(newPrice)
            newPrice !== 0 ? setConvertedCurrencyPrice(+(getPrice(currencyName) * newPrice / getPrice(convertedCurrencyName)).toFixed(5)) : 0;
        } else {
            setConvertedCurrencyPrice(newPrice)
            newPrice !== 0 ? setCurrencyPrice(+(getPrice(convertedCurrencyName) * newPrice / getPrice(currencyName)).toFixed(5)) : 0;
        }
    }
    const updateCurrencyName = (name, newCurrencyName) => {
        if (name === currencyName) {
            setCurrencyName(newCurrencyName)
            setConvertedCurrencyPrice(+(getPrice(newCurrencyName) * currencyPrice / getPrice(convertedCurrencyName)).toFixed(5));
        } else {
            setConvertedCurrencyName(newCurrencyName)
            setCurrencyPrice(+(getPrice(newCurrencyName) * convertedCurrencyPrice / getPrice(currencyName)).toFixed(5));
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.body__form}>
                <div className={styles.body__wrapper}>
                    <SelectBur
                        list={currencyList}
                        name={currencyName}
                        value={currencyPrice}
                        updatePrice={updatePrice}
                        updateName={updateCurrencyName}
                    />
                    <div>
                        <img src={convertImage} className={styles.body_image} alt={"convert"}/>
                    </div>
                    <SelectBur
                        list={currencyList}
                        name={convertedCurrencyName}
                        value={convertedCurrencyPrice}
                        updatePrice={updatePrice}
                        updateName={updateCurrencyName}
                    />
                </div>
            </div>
        </div>
    );
};

export default Body;