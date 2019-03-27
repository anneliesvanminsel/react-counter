import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useCounter(value) {


    let [counter, setCounter] = useState(value);
    const [localStorage, setLocalStorage] = useLocalStorage('counter', counter);

    if(localStorage !== null) {
        counter = localStorage;
    }

    function increment () {
        setLocalStorage(counter + 1);
        return setCounter(counter + 1);
    }

    function decrement () {
        if(!(counter - 1 < 0)) {
            setLocalStorage(counter - 1);
            return setCounter(counter - 1);
        }
    }

    return {counter, decrement, increment};
}

export { useCounter };
