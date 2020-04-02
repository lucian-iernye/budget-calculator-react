import React from "react";
import styles from "./ExpenseForm.module.scss";
import { MdSend } from "react-icons/md";

const ExpenseForm = () => {
  return (
    <>
      <form action="">
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">Charge</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="ex. rent or mortgage"
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="ex. 200"
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Submit
          <MdSend className="btn-icon" />
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
