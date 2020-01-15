
import { useState } from 'react';

//to retrieve an item from localStorage, call localStorage.getItem('itemName')
//If that item does not exist, it will return undefined

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {

    //Get from local storage by key
                                //⬇ 
    const item = window.localStorage.getItem(key);  

    //Parse and return stored json or, if undefined, return intialValue
                                //⬇ 
    // if(localStorage.getItem(key)){
    //   return JSON.parse(localStorage.getItem(key))
    // }else{
    //   localStorage.setItem(key, JSON.stringify(initialValue))
    //   return initialValue;
    // }                //same as ⬇?
 
    return item ? JSON.parse(item) : initialValue;
  })

  const setValue = value => {

    //Save state
        //⬇ 
    setStoredValue(value);

    //Save to local storage
        //⬇
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}