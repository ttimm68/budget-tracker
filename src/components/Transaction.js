const Transaction = ({ transaction }) => {
  return (
    <div>
        <h2>
            {transaction.text}
        </h2>
        <p>
            {transaction.category}
        </p>
    </div>
  );
};

export default Transaction;