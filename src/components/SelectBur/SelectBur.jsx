import React from 'react';
import styles from "./SelectBur.scss";
import QuickBar from "../QuickBar/QuickBar";

const SelectBur = ({list, name, value, updatePrice, updateName}) => {
    console.log(name)
    return (
        <div>
            <select
                className={styles.body__form_select}
                value={name}
                onChange={event => updateName(name, event.target.value)}
            >
                <option
                    disabled
                    value={""}
                >
                    Select Currency
                </option>
                { list.map(item =>
                    <option
                        key={item.cc}
                        value={item.cc}
                    >{item.cc} {item.txt}
                    </option>
                )}
            </select>
            <input
                disabled={!name}
                className={styles.body__form_input}
                value={value}
                onChange={event => updatePrice(name, event.target.value)}/>

            <QuickBar name={name} update={updateName}/>

        </div>
    );
};

export default SelectBur;