import React, { useEffect, useState } from 'react';
import {createStore} from 'redux';
import {useCounter} from 'hooks/useCounter';
import {useLocalStorage} from 'hooks/useLocalStorage';
import {ReactComponent as Increment} from 'icons/increment.svg';
import {ReactComponent as Decrement} from 'icons/decrement.svg';

const incrementValues = [1, 5, 10];

const Counter = () => {
    const [incrementor, setIncrementor] = useState(5);
    const [localStorage, setLocalStorage] = useLocalStorage('counter', counter);
    const {counter, increment, decrement} = useCounter(localStorage);

    const handleDecrement = () => {
        if (!(counter - incrementor < 0)) {
            store.dispatch({type: "DECREMENT"})
        }
    };

    const handleIncrement = () => {

        store.dispatch({type: "INCREMENT"})

    };

    const count = (state = counter, action) => {
        switch (action.type) {
            case "INCREMENT":
                increment(incrementor);
                return state + incrementor;
            case "DECREMENT":
                decrement(incrementor);
                return state - incrementor;
            default:
                return state;
        }
    };

    const handleOnChangeInput = (event) => {
        const value = JSON.parse(event.target.value);
        setIncrementor(value);
    };

    const optionMap = incrementValues.map( option => {
        const selected = (incrementor === option) ? true : '';
        return <option key={option} value={option} selected={selected}> {option} </option>
    });

    useEffect(() => setLocalStorage(counter), [counter]);
    let store = createStore(count);
    store.subscribe(() => console.log(store.getState()));

    return (

        <div className="block">
            <form className="form">
                    <select
                        className="select"
                        onChange={handleOnChangeInput} >
                        {optionMap}
                    </select>
            </form>
            <div className="block__actions">
                <button className="button button--decrement" onClick={handleDecrement}>
                    <Decrement/>
                </button>
                <div className="block__text"> {counter} </div>
                <button className="button button--increment" onClick={handleIncrement}>
                    <Increment/>
                </button>
            </div>
        </div>
    );
};


export default Counter;
