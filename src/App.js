import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import MenClothing from './pages/MenClothing';
// import Modal from './components/Modal'
// import { useContext } from 'react';
// import AppState from './context/AppState';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';


function App() {
// const { modal } = useContext(AppState)

  return (
    <div className="app">
        {/* {modal && <Modal />} */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/men/:name">
              <MenClothing />
            </Route>
            <Route path="/product/:id">
              <SingleProduct/>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
