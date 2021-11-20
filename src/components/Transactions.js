import Transaction from "./Transaction";

const Transactions = ({ transactions, onDelete }) => {
  return (
    <>
      {transactions.map((transaction, id) => (
        <Transaction key={id} transaction={transaction} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Transactions;
