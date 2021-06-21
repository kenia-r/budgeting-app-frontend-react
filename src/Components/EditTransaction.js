import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiURL";

const API = apiURL();

export default function EditTransaction({ updateTransaction }) {
  let { id } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    date: new Date().toLocaleDateString("en-CA"),
    name: "",
    amount: 0,
    from: "",
  });

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${id}`);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTransaction(transaction, id);
    history.push(`/transactions/${id}`);
  };

  return (
    <div className="Edit">
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
        <button type="submit" className="btn btn-light">Edit</button>
      </form>
      <br/>
      <Link to={`/transactions/${id}`}>
        <button className="btn btn-light">Go Back to Transaction</button>
      </Link>
    </div>
  );
}
