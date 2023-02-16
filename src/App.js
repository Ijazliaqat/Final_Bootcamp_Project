import { Route, Routes } from "react-router-dom";
import AddCart from "./componets/add-cart/add-cart";
import CreateProduct from "./componets/add-products/add-products";
import AddProducts from "./componets/add-products/add-products";
import Dashboard from "./componets/Dashboard/dashboard";
import Footer from "./componets/footer/footer";
import Header from "./componets/header/header";
import HeroSection from "./componets/hero-section/hero-section";
import History from "./componets/history/history";
import AllProducts from "./componets/our-products/all-products";
import SingleProducts from "./componets/single-products/single-products";
import Users from "./componets/users/users";
import "./App.css";
import SignIn from "./componets/authentication/sign-in/sign-in";
import SignUp from "./componets/authentication/sign-up/sign-up";
import Wishlists from "./componets/wishlists/wishlists";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <AddCart />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/home" element={<HeroSection />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="history" element={<History />} />
          <Route path="home/products/:productId" element={<SingleProducts />} />
          <Route path="wishlists" element={<Wishlists />} />
        </Route>
        <Route path="create-products" element={<CreateProduct />} />
        <Route path="/log-in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Users /> */}
      <Footer />
    </div>
  );
}

export default App;
