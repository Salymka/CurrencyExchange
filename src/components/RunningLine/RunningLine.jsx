import React from 'react';
import styles from "./RunningLine.scss";

const RunningLine = ({currencyList}) => {
    const runningLineList = currencyList.slice(0, -1)
    const normalyzePrice = (price) => {
        if (+price > 1) {
            return price.toFixed(2)
        }
        return price.toPrecision(2)
    }
    return (
        <div className={styles.runningLine}>
            <div className={styles.runningLine__wrapper}>
                { runningLineList.map(item =>
                    <p
                        key={item.cc}
                        className={styles.runningLine__ticker}
                    >
                        {item.cc} - {normalyzePrice(item.rate)} ₴
                    </p>
                )
                }
            </div>
        </div>
    );
};

export default RunningLine;