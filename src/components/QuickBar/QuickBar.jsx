import React from 'react';
import styles from './QuickBar.scss'
const QuickBar = ({name, update}) => {
    const quickBar = [
        {name: 'USD', cc: "USD"},
        {name: 'EUR', cc: "EUR"},
        {name: 'UAH', cc: "UAH"},
    ]
    return (
        <div className={styles.body__form__quickBar}>
            { quickBar.map(item =>
                <button
                    key={item.cc}
                    onClick={() => update(name, item.cc)}
                    className={styles.body__form__quickBar_item}
                >
                    {item.name}
                </button>
            )}
        </div>
    );
};

export default QuickBar;