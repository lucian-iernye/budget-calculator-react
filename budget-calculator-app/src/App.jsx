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
  { id: uuid(), charge: "credit card bill", amount: 1200 },
];

const App = () => {
  // ************* state values ************************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);

  // single expense
  const [charge, setCharge] = useState("");

  // single amount
  const [amount, setAmount] = useState("");

  //alert
  const [alert, setAlert] = useState({ show: false });

  // ***************functionality *********************
  //handle charge
  const handleCharge = (event) => {
    setCharge(event.target.value);
  };

  //handle amount
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuid(), charge: charge, amount: amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "item added" });
      setCharge("");
      setAmount("");
    } else {
      //handle alert called
      handleAlert({
        type: "danger",
        text: `Charge can't be empty value and amount value has to be bigger than 0 !`,
      });
    }
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
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
                return (accumulator += parseInt(current.amount));
              }, 0)}
            </span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default App;
