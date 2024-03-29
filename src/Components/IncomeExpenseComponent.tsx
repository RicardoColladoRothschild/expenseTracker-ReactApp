import './IncomeExpenseComponent.css';


interface Props{
    income:number | undefined;
    expense: number | undefined;
    
}
export default function IncomeExpenseComponent({income, expense}:Props){

    return(
        <section className="inc-exp-container">
            <div className="income-container sub-container-inc-ex">
                    <p>INCOME</p>
                    <span>{`$${income}`}</span>
            </div>

            <div className="expense-container sub-container-inc-ex">
                    <p>EXPENSE</p>
                    <span>{`$${expense}`}</span>
            </div>
        </section>
    );
}