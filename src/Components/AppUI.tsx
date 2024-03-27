import BalanceComponent from '../Components/BalanceComponent';
import IncomeExpenseComponent from './IncomeExpenseComponent';
export default function AppUI(){


    return(
        <main>
            <BalanceComponent
                balance={15.5}
            />

            <IncomeExpenseComponent/>
        </main>
    );
}