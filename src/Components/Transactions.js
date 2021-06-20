import React from "react";
import { Link } from "react-router-dom";

export default function Transactions({transactions}) {
  return (
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <li key={index}>
              {transaction.date} <Link to={`/transactions/${index}`}>{transaction.name}</Link> {transaction.amount}
            </li>
          );
        })}
      </ul>
  );
}
