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
    <div className="card">
      <h3 className="card-header">Date: {transaction.date}</h3>
      <div className="card-body">
        <h5 className="card-title">Name: {transaction.name}</h5>
        <p className="card-text">Amount: {transaction.amount}</p>
        <h6 className="card-text">From: {transaction.from}</h6>
        <div class="btn-group" role="group" aria-label="Basic outlined button group">
          <Link to={`/transactions/${id}/edit`}>
            <button className="btn btn-outline-primary">Edit</button>
          </Link>
          <button onClick={handleDelete} className="btn btn-outline-primary">
            Delete
          </button>
          <br />
          <Link to={`/transactions`}>
            <button className="btn btn-outline-primary">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
