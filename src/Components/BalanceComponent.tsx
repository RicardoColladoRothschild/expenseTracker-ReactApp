
interface Props{
    balance:number;
}
export default function BalanceComponent({balance}:Props){

    return(
        <section className="balance-container">
        <p>YOUR BALANCE</p>
        <p className="amount-container">${balance}</p>
        </section>
    );
}