import Transaction from './Transaction'

const Transactions = ({ transactions }) => {
    return (
        <>
            {transactions.map((transaction) => (
                <Transaction key={transaction.id}> transaction={transaction}
                </Transaction>
            ))}
        </>
    )
}

export default Transactions;