// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";

const ExpenseTracker = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // Update balance
    setBalance((prevBalance) => prevBalance + parsedAmount);

    // Add transaction to the list
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { description, amount: parsedAmount },
    ]);

    // Clear form
    setDescription("");
    setAmount("");
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="balance">
        <h2>
          Balance: $<span id="balance">{balance.toFixed(2)}</span>
        </h2>
      </div>
      <div className="transactions">
        <h2>Transactions</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {`${transaction.description}: 
											$${transaction.amount.toFixed(2)}`}
            </li>
          ))}
        </ul>
      </div>
      <div className="add-expense">
        <h2>Add Expense</h2>
        <form>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="button" onClick={addExpense}>
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseTracker;
