
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
  const [values, setValues] = useLocalStorage(key);

  useEffect(
    () => {
      if(useLocalStorage.value === true){
        return 
      }
    }
  )
}