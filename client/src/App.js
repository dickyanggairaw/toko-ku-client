import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Transaction from './pages/Transaction'
import History from './pages/History'
import AddForm from './pages/AddForm'
import EditForm from './pages/EditForm'
import Login from './pages/Login'
import NavBar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/editForm/:id">
              <EditForm />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/addProduct">
              <AddForm />
            </Route>
            <Route path="/transactions">
              <Transaction />
            </Route>
            <Route path="/histories">
              <History />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
