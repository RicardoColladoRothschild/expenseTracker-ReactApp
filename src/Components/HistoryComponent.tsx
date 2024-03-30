import '../styles/HistoryComponent.css';
import { ExpenseType } from "./ExpenseType";
interface Props{
    expenseList:ExpenseType[];
    setExpenseList:(expense:ExpenseType[] | undefined)=>void;

}
export function HistoryComponent({expenseList, setExpenseList}: Props){


    function deleteExpense(position:number){
           
                
            const estadoDerivado = expenseList.filter((expense, index)=>{
                       return index!==position;
            
            });
            
            setExpenseList(estadoDerivado);
          
    }
    
    return(

        <>
        <div className="expense-history-container">
        <h3>History</h3>
        <ul className="expense-list-container">
        {expenseList && 
                expenseList.map((expense, index)=>(
                <div key={`${expense.expense}+${index}`} className="item-detail-list-container">
                    <span onClick={()=>deleteExpense(index)}>x</span>
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