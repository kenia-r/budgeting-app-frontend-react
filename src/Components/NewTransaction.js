import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewTransaction({ addTransaction }) {
  let history = useHistory();
  const [ transaction, setTransaction ] = useState({
    date: new Date().toLocaleDateString('en-CA'),
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

  return (
    <div className="new">
      <form onSubmit={handleSubmit} className="new-form">
        <label htmlFor="date">
          Date
          <input
            onChange={handleChange}
            id="date"
            type="date"
            placeholder="Date"
            value={transaction.date}
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
          ></input>
        </label>
        <br/>
        <button type="submit" className="btn btn-light">Submit</button>
      </form>
    </div>
  );
}

export default NewTransaction;
