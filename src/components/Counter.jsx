import React from 'react';
import { useCounter } from 'hooks/useCounter';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { ReactComponent as Increment } from 'icons/increment.svg';
import { ReactComponent as Decrement } from 'icons/decrement.svg';

const Counter = () => {

    const {counter, increment, decrement} = useCounter(10);
    useLocalStorage(counter);

    return (
        <div className="counter--wrapper">
            <button onClick={decrement}>
                <Decrement />
            </button>
            <div className="counter--count"> {counter} </div>
            <button onClick={increment}>
                <Increment />
            </button>
        </div>
    );
};


export default Counter;
