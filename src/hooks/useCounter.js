import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useCounter(value = 10) {
    const [counter, setCounter] = useState(value);

    const increment = (value) => {
        setCounter(counter + value);
    };

    const decrement = (value) => {
        setCounter(counter - value);
    };

    return {counter, decrement, increment};
}

export { useCounter };
