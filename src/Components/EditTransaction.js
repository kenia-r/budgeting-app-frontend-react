import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiURL";

const API = apiURL();

export default function EditTransaction(props) {
  let { id } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    date: new Date().toLocaleDateString('en-CA'),
    name: "",
    amount: 0,
    from: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.updateTransaction(transaction, id);
    history.push(`/transactions/${id}`);
  };

  return (
    <div className="Edit">
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
        <button type="submit">Edit</button>
      </form>
      <Link to={`/transactions/${id}`}>
        <button>Go Back to Transaction</button>
      </Link>
    </div>
  );
}
