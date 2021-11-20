const Transaction = ({ transaction, onDelete }) => {
  return (
    <div>
      <h3>
        {transaction.text} <p onClick = {() => onDelete(transaction.id)}>X </p>
      </h3>
      <p>{transaction.category}</p>
    </div>
  );
};

export default Transaction;