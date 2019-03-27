import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useCounter(value = 10) {
    const [counter, setCounter] = useState(value);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if(!(counter - 1 < 0)) {
            setCounter(counter - 1);
        }
    };

    return {counter, decrement, increment};
}

export { useCounter };
