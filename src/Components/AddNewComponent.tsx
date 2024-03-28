import React, { useState } from 'react';
import '../styles/AddNewComponent.css';
import { ExpenseType } from './ExpenseType';

interface Props{
    setExpenseList:(expenseList: ExpenseType[])=>void;
    expenseList:ExpenseType[];
}
export const AddNewComponent:React.FC<Props> = ({setExpenseList, expenseList}:Props)=>{

    const [textandAmount, setTextAndAmount] = useState<ExpenseType>({expense:'', amount:0});

    const addNew_text = `Add new transaction`; 
    const amount_text =`Amount`;
    const amount_constraint_text = '(negative - expense, positive - income)';


    function saveTextHandler(event:React.ChangeEvent<HTMLInputElement>){
        setTextAndAmount(prevState=>({
            expense:event.target.value,
            amount:prevState.amount
        }));

    }
    function saveAmountHandler(event:React.ChangeEvent<HTMLInputElement>){
       
        setTextAndAmount(prevState=>({
            expense:prevState.expense,
            amount:Number(event.target.value)
        }));
    }

    function addnewExpenseHandler(){
        const tempArray = [...expenseList, textandAmount];
        setExpenseList(tempArray);
    }
    return(
        <div className="addnew-container">
            <h3>{addNew_text}</h3>
            <div className="addnew-container-submit">
                <p>Text</p>
                <input onChange={saveTextHandler} className="input-container-text" type="text" placeholder="Enter text..."/>
                <p>{amount_text}</p>
                <p>{amount_constraint_text}</p>
                
                <input onChange={saveAmountHandler} className="input-container-text" type="text" placeholder="Enter text..."/>
                <button onClick={addnewExpenseHandler}>Add new transaction</button>

            </div>
        </div>
    );
}