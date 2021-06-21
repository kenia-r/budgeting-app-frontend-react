import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Transactions from "./Components/Transactions";
import NewTransaction from "./Components/NewTransaction";
import { apiURL } from "./Util/apiURL";
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    // debugger
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
            {/* <Route exact path="/transactions/:id">
              <Show
                transactions={transactions}
                deleteTransaction={deleteTransaction}
              />
            </Route> */}
            {/* <Route path="*">
              <FourOFour />
            </Route> */}
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
