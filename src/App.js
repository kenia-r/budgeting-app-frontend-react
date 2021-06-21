import axios from "axios";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { apiURL } from "./Util/apiURL";

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Transactions from "./Components/Transactions";
import NewTransaction from "./Components/NewTransaction";
import ShowTransaction from "./Components/ShowTransaction";
import EditTransaction from "./Components/EditTransaction";
import FourOFour from "./Components/FourOFour";

import "./App.css";

const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions([...transactions, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransaction = async (updatedTransaction, id) => {
    try {
      await axios.put(`${API}/transactions/${id}`, updatedTransaction);
      const newTransactions = [...transactions];
      newTransactions[id] = updatedTransaction;
      setTransactions(newTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API}/logs/${id}`);
      const dummyState = [...transactions];
      dummyState.splice(id, 1);
      setTransactions(dummyState);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <div>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
              <Transactions transactions={transactions} />
            </Route>
            <Route exact path="/transactions/new">
              <NewTransaction addTransaction={addTransaction} />
            </Route>
            <Route exact path="/transactions/:id">
              <ShowTransaction deleteTransaction={deleteTransaction} />
            </Route>
            <Route exact path="/transactions/:id/edit">
              <EditTransaction updateTransaction={updateTransaction} />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
