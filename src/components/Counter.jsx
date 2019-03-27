import React from 'react';
import { useCounter } from 'hooks/useCounter';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { ReactComponent as Increment } from 'icons/increment.svg';
import { ReactComponent as Decrement } from 'icons/decrement.svg';

const Counter = () => {
    const initialCounter = 10;
    const [localStorage, setLocalStorage] = useLocalStorage('counter', initialCounter);
    const {counter, increment, decrement} = useCounter(localStorage);

    const handleDecrement = () => {
        decrement();
        setLocalStorage(counter - 1);
    };

    const handleIncrement = () => {
        increment();
        setLocalStorage(counter + 1);
    };

    return (
        <div className="block">
            <button className="button button--decrement" onClick={handleDecrement}>
                <Decrement />
            </button>
            <div className="block__text"> {counter} </div>
            <button className="button button--increment" onClick={handleIncrement}>
                <Increment />
            </button>
        </div>
    );
};


export default Counter;
