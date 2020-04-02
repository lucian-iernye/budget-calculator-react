import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 }
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Spending :{" "}
        <span className="total">
          £
          {expenses.reduce((accumulator, current) => {
            return (accumulator += current.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
};

export default App;
