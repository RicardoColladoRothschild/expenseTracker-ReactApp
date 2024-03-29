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
                <div key={expense.expense} className="item-detail-list-container">
                    <span>x</span>
                <li className="expense-detail-container" key={expense.expense}>
                <p >{expense.expense}</p>
                <span>
                {expense.amount}
                
                </span>

                </li>
                <span className={`color-identifier-container  ${(expense.amount < 0) ? 'expense-red' : 'income-green'}`}></span>
                </div>
                    
                ))
            }</ul>
           
        </div>
        
        </>
    );
}