import React from "react";
import { Link } from "react-router-dom";

export default function Transactions({ transactions }) {
    let total = 0;
  return (
    <div>
        {transactions.forEach(transaction => {
            return total += Number(transaction.amount)
        })}
      <h1> Bank Account Total: {total || 0} </h1>
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <li key={index}>
              {transaction.date}{" "}
              <Link to={`/transactions/${index}`}>{transaction.name}</Link>{" "}
              {transaction.amount}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
