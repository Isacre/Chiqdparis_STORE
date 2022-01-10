import "./App.css";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Login from "./pages/Login/";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import CartComponent from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/conta" element={<Profile />} />
            <Route path="/favoritos" element={<Favourites />} />
            <Route path="/carrinho" element={<CartComponent />} />
            <Route path="/produto/:id/:title" element={<ProductPage />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
