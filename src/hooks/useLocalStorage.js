import { useState } from 'react';

function useLocalStorage(key, initialCounter) {

    const [storedCounter, setStoredCounter] = useState(() => {
        if (window.localStorage.getItem(key)) {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item)  : initialCounter;
        }
        return initialCounter;
    });

    const setCounter = counter => {
        console.log('counter', counter);

        if(counter){
            const counterToStore =
                counter instanceof Function ? counter(storedCounter) : counter;
            setStoredCounter(counterToStore);
            window.localStorage.setItem(key, JSON.stringify(counterToStore));
        }
    };

    return [storedCounter, setCounter];
}

export { useLocalStorage };
