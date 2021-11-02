import { useState } from "react";
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "deposit",
      category: "paycheck",
    },
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
