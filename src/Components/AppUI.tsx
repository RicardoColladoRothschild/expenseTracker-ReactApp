import { useEffect, useState } from 'react';
import BalanceComponent from '../Components/BalanceComponent';
import { AddNewComponent } from './AddNewComponent';
import { ExpenseType } from './ExpenseType';
import { HistoryComponent } from './HistoryComponent';
import IncomeExpenseComponent from './IncomeExpenseComponent';


export default function AppUI(){

    const [expenseList, setExpenseList] = useState<Array<ExpenseType>>([]);

    

    useEffect(()=>{
        setExpenseList([
            {
                expense:"comer",
                amount:300
            },
            {
                expense:"jugar",
                amount:100
            
            }
        ]);
    },[]);
    
    return(
        <main>
            <BalanceComponent
                balance={15.5}
            />
            <IncomeExpenseComponent/>
            
                <HistoryComponent
                    expenseList={expenseList}
                />
                <AddNewComponent
                setExpenseList={setExpenseList}
                expenseList = {expenseList}
                />
            
            
        </main>
    );
}