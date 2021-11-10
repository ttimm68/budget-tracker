import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  return (
    <>
      {transactions.map((transaction, id) => (
        <Transaction key={id} transaction={transaction} />
      ))}
    </>
  );
};

export default Transactions;