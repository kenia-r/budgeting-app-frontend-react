import React from "react";
import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

function NewTransaction({ addTransaction }) {
  let history = useHistory();
  const [ transaction, setTransaction ] = useState({
    date: new Date(),
    name: "",
    amount: 0,
    from: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction(transaction);
    history.push("/transactions");
  };

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  //   const { date, name, amount, from } = transaction;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">
          Date
          <input
            onChange={handleChange}
            id="date"
            type="date"
            placeholder="Date"
            value={transaction.date}
          ></input>
        </label>
        <label htmlFor="name">
          Name
          <input
            onChange={handleChange}
            id="name"
            type="text"
            placeholder="Name"
            value={transaction.name}
          ></input>
        </label>
        <label htmlFor="amount">
          Amount
          <input
            onChange={handleChange}
            id="amount"
            type="number"
            placeholder="Amount"
            value={transaction.amount}
          ></input>
        </label>
        <label htmlFor="from">
          From
          <input
            onChange={handleChange}
            id="from"
            type="text"
            placeholder="From"
            value={transaction.from}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default withRouter(NewTransaction);
