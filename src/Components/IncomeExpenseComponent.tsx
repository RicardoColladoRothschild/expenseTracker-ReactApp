import './IncomeExpenseComponent.css';
export default function IncomeExpenseComponent(){

    return(
        <section className="inc-exp-container">
            <div className="income-container sub-container-inc-ex">
                    <p>INCOME</p>
                    <span>$350.00</span>
            </div>

            <div className="expense-container sub-container-inc-ex">
                    <p>EXPENSE</p>
                    <span>$150.00</span>
            </div>
        </section>
    );
}