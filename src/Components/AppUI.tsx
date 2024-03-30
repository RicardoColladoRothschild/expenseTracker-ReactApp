import { useEffect, useState } from 'react';
import BalanceComponent from '../Components/BalanceComponent';
import { useLocalStorage } from '../CustomHook/useLocalStorage';
import { AddNewComponent } from './AddNewComponent';
import { HistoryComponent } from './HistoryComponent';
import IncomeExpenseComponent from './IncomeExpenseComponent';

export default function AppUI(){

    const {item:expenseList, saveItem:setExpenseList} = useLocalStorage('ExpenseListStorage',[]);
    //const [expenseList, setExpenseList] = useState<Array<ExpenseType>>([]);

    const [income, setIncome] = useState<number | undefined>(0);
    const [expense, setExpense] = useState<number | undefined>(0);
        useEffect(()=>{
                let sum = 0;
                let sumExpense = 0
            expenseList!.forEach((expenseElement)=>{
                if(expenseElement.amount > 0){
                    sum +=expenseElement.amount;
                }else{
                    sumExpense += expenseElement.amount;
                }
            })
            setIncome(sum);
            setExpense(sumExpense);
        },[expenseList]);
    
    return(
        <main>
            <BalanceComponent
                balance={(income! + expense!)}
            />
            <IncomeExpenseComponent
                income={income}
                expense={expense}
            />
            
                <HistoryComponent
                    expenseList={expenseList}
                    setExpenseList={setExpenseList}
                />
                <AddNewComponent
                setExpenseList={setExpenseList}
                expenseList = {expenseList}
                />
            
            
        </main>
    );
}