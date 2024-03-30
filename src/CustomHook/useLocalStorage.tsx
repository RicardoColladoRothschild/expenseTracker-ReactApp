import React from 'react';
import { ExpenseType } from '../Components/ExpenseType';

function useLocalStorage(itemName:string, initialValue:ExpenseType[]){

    const [item, setItem] = React.useState(initialValue);
    const [error, setError] = React.useState<boolean>(false);
        React.useEffect(()=>{

                try{
                    const localStorageItem = localStorage.getItem(itemName);
                    let parsedItem;

                        if(!localStorageItem){
                            localStorage.setItem(itemName, JSON.stringify(initialValue));
                            parsedItem = initialValue
                        }else{
                            parsedItem = JSON.parse(localStorageItem);
                            setItem(parsedItem);
                        }
                }catch(error){
                    setError(true);
                }
        },[]);

            //it should reveice an array of ExpenseType
            /**What i do here is, i will use this saveItem function everytime an expense is delete, or added it, it should receive
             *  The new array and then parsed to the localSotrage as a JSON, and also set the Item (which will be the state used outside) with it.
             */
        const saveItem = (newItem:ExpenseType[])=>{
            localStorage.setItem(itemName, JSON.stringify(newItem));
            setItem(newItem);
        }

        return {item, saveItem, error}
}

export { useLocalStorage };
