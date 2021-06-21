import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiURL";

const API = apiURL();

export default function ShowTransaction({ deleteTransaction }) {
  const [transaction, setTransaction] = useState({});
  let { id } = useParams();
  let history = useHistory();

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

  const handleDelete = () => {
    deleteTransaction(id);
    history.push("/transactions");
  };

  return (
    <div>
      <h3>Date: {transaction.date}</h3>
      <h3>Name: {transaction.name}</h3>
      <h3>Amount: {transaction.amount}</h3>
      <h3>From: {transaction.from}</h3>
      <Link to={`/transactions/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/transactions`}>
        <button>Go Back to Transactions</button>
      </Link>
    </div>
  );
}
