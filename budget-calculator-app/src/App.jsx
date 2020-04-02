import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.scss";
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
  // ************* state values ************************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);

  // single expense
  const [charge, setCharge] = useState("");

  // single amount
  const [amount, setAmount] = useState("");

  // ***************functionality *********************
  const handleCharge = event => {
    console.log(`charge : ${event.target.value}`);
    setCharge(event.target.value);
  };

  const handleAmount = event => {
    console.log(`amount : ${event.target.value}`);

    setAmount(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Alert />
      <section className="container">
        <div className="wrapper">
          <h2>Budget Calculator</h2>
          <main className="App">
            <ExpenseForm
              charge={charge}
              amount={amount}
              handleAmount={handleAmount}
              handleCharge={handleCharge}
              handleSubmit={handleSubmit}
            />
            <ExpenseList expenses={expenses} />
          </main>
          <h2>
            <span className="total">
              Total Spending : £
              {expenses.reduce((accumulator, current) => {
                return (accumulator += current.amount);
              }, 0)}
            </span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default App;
