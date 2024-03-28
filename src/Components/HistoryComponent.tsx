import '../styles/HistoryComponent.css';
import { ExpenseType } from "./ExpenseType";
interface Props{
    expenseList:ExpenseType[]
}
export function HistoryComponent({expenseList}: Props){


    
    return(

        <>
        <div className="expense-history-container">
        <h3>History</h3>
        <ul className="expense-list-container">            
        {expenseList && 
                expenseList.map((expense)=>(
                    <li className="expense-detail-container" key={expense.expense}>  
                    
                    <p >{expense.expense}</p>
                    <span>{expense.amount}</span>
                    </li>
                ))
            }</ul>
           
        </div>
        
        </>
    );
}