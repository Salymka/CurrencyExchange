import React from 'react';
import styles from './Header.scss'
import RunningLine from "../RunningLine/RunningLine";

const Header = ({currencyList}) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <h1 className={styles.header__label}>
                    Currency Converter
                </h1>
            </div>
            <RunningLine currencyList={currencyList}/>
        </div>
    );
};

export default Header;