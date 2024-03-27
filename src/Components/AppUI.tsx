import BalanceComponent from '../Components/BalanceComponent';

export default function AppUI(){


    return(
        <main>
            <BalanceComponent
                balance={15.5}
            />
        </main>
    );
}