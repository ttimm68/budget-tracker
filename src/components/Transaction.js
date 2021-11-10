const Transaction = ({ transaction }) => {
  return (
    <div>
      <h3>{transaction.text}</h3>
      <p>{transaction.category}</p>
    </div>
  );
};

export default Transaction;