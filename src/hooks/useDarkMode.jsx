
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }
  useEffect(() => {
      if(darkMode === false){
        document.querySelector('body').classList.remove = ('dark-mode');
      }if(darkMode === true){
        document.querySelector('body').classList.toggle = ('dark-mode');
      }
    },
    [darkMode],
  )

  return [darkMode, toggleMode]
}