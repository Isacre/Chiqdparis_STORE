import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;