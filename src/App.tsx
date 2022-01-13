import Header from "./Components/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import CartComponent from "./pages/Cart";
import Male from "./pages/Male";
import Female from "./pages/Female";
import Tech from "./pages/Hardware";
import Jewelry from "./pages/Jewelry";
import GlobalStyle from "./styles/globalStyles";
import Homepage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Header />
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/masculinos" element={<Male />} />
            <Route path="/femininos" element={<Female />} />
            <Route path="/tecnologia" element={<Tech />} />
            <Route path="/joias" element={<Jewelry />} />
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
