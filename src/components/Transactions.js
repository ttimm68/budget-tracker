import Task from './Task'

const Transactions = ({ transactions }) => {
    return (
        <>
            {transactions.map((transaction) => (
                <Task key={transaction.id}> transaction={transaction} />
            ))}
                </>
            )
}

            export default Transactions