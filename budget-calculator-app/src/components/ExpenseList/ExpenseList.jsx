import React from "react";
import styles from "./ExpenseList.module.scss";
import ExpenseItem from "../ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
      {/* if */}
      {expenses.length > 0 && (
        <button className="btn">
          Clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
