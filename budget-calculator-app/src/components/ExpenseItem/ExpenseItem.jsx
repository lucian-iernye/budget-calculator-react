import React from "react";
import styles from "./ExpenseItem.module.scss";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">£{amount}</span>
      </div>
      <div>
        Edit
        <button className="edit-btn" aria-label="edit button">
          <MdEdit />
        </button>
        Delete
        <button className="clear-btn" aria-label="delete button">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
