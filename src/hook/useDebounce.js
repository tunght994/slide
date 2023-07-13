import { useState, useEffect, useRef } from 'react';

const useDebounce = (value, delay) => {
    const handler = useRef(null)
    const [debouncedValue, setDebouncedValue] = useState(value);

    const _handleClearDebounce = () => {
        clearTimeout(handler.current);
    }
    
    useEffect(() => {
        handler.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler.current);
        };
    },
        [value, delay]
    );

    return [debouncedValue, _handleClearDebounce];
}

export default useDebounce
