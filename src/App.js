import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import BasicTabs from './tabs/TaskTabs';

// Shopping Cart Related
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProductList from './shoppingCartRedux/ProductList';

function App() {
  return (
    <div className="App">
      <Container fixed>
        {/* <BasicTabs /> */}
        <Provider store={store}>
          <BrowserRouter>
            <nav>
              <ul>
                <li>
                  <Link to={`/pages/ProductPage`}>Products</Link>
                </li>
                <li>
                  <Link to="/CartPage">Cart</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="./pages/ProductPage" element={<ProductPage />}></Route>
              <Route path="./pages/CartPage" element={<CartPage />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </Container>

    </div>
  );
}

export default App;
