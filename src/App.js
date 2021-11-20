import { useState } from "react";
import Header from "./components/Header";
import Transactions from "./components/Transactions";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "deposit",
      category: "paycheck",
    },
    {
      id: 2,
      text: "withdrawal",
      category: "gas",
    },
    {
      id: 3,
      text: "withdrawal",
      category: "hot dogs",
    }
  ]);

  const deleteTransaction = (id) => {
    console.log('delete', id)
    setTransactions(transactions.filter((transaction) => transactions.id !== id ))
  }

  return (
    <div className="App">
      <header>
        <Header title="Budget Tracker" />
        <Transactions transactions={transactions} onDelete={deleteTransaction} />
      </header>
    </div>
  );
};

export default App;
