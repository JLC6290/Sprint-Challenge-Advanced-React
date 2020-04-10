import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = key => {
    const [keyValue, setKeyValue] = useLocalStorage(false)
    
    useEffect(() => {
        if(keyValue === true) {
            document.body.classList.add("dark-mode")
        }
        else {
            document.body.classList.remove("dark-mode")
        }
    }, [keyValue])
    return [keyValue, setKeyValue]
}
export default useDarkMode;