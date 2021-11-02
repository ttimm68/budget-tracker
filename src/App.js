import { useState } from "react";
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/Transactions";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: 'deposit',
      category: "paycheck",
    },
    {
      id: 1,
      text: 'withdrawal',
      category: "gas",
    }
  ]);

  return (
    <div className="App">
      <header>
        <Header title="Budget Tracker" />
        <Transactions transactions={transactions} />
      </header>
    </div>
  );
};

export default App;
