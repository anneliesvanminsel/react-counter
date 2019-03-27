import React, {useEffect} from 'react';
import {createStore} from 'redux';
import {useCounter} from 'hooks/useCounter';
import {useLocalStorage} from 'hooks/useLocalStorage';
import {ReactComponent as Increment} from 'icons/increment.svg';
import {ReactComponent as Decrement} from 'icons/decrement.svg';

const Counter = () => {
    const initialCounter = 10;
    const [localStorage, setLocalStorage] = useLocalStorage('counter', initialCounter);
    const {counter, increment, decrement} = useCounter(localStorage);

    let initialValue = 10;

    const handleDecrement = () => {
        if (!(counter - initialValue < 0)) {
            store.dispatch({type: "DECREMENT"})
        }
    };

    const handleIncrement = () => {

        store.dispatch({type: "INCREMENT"})

    };

    const count = (ctr = counter, action) => {
        switch (action.type) {
            case "INCREMENT":
                increment(initialValue);
                return ctr + initialValue;
            case "DECREMENT":
                decrement(initialValue);
                return ctr - initialValue;
            default:
                return counter;
        }
    };

    const handleOnChangeInput = (e) => {
        console.log(e.target)
    };

    useEffect(() => setLocalStorage(counter), [counter]);
    let store = createStore(count);
    store.subscribe(() => console.log(store.getState()))

    return (
        <div className="block">
            <form>
                <fieldset>
                    <select className="select" onChange={handleOnChangeInput}>
                        <option>1</option>
                        <option>5</option>
                        <option>10</option>
                    </select>
                </fieldset>
            </form>
            <button className="button button--decrement" onClick={handleDecrement}>
                <Decrement/>
            </button>
            <div className="block__text"> {counter} </div>
            <button className="button button--increment" onClick={handleIncrement}>
                <Increment/>
            </button>
        </div>
    );
};


export default Counter;
