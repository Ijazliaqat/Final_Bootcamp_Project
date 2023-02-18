import { Navigate, Route, Routes } from "react-router-dom";
import CreateProduct from "./componets/add-products/add-products";
import SignIn from "./componets/authentication/sign-in/sign-in";
import SignUp from "./componets/authentication/sign-up/sign-up";
import AppLoader from "./componets/app-loader/app-loader";
import Dashboard from "./componets/Dashboard/dashboard";
import AddCart from "./componets/add-cart/add-cart";
import Footer from "./componets/footer/footer";
import { lazy, Suspense } from "react";
import "./App.css";

const HeroSection = lazy(() => import('./componets/hero-section/hero-section'));
const AllProducts = lazy(() => import('./componets/our-products/all-products'));
const Wishlists = lazy(() => import('./componets/wishlists/wishlists'));
const History = lazy(() => import('./componets/history/history'));
const SingleProducts = lazy(() => import('./componets/single-products/single-products'));

function App() {
  return (
    <div className="App">
      <AddCart />
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<HeroSection />} />
            <Route path="home/products" element={<AllProducts />} />
            <Route path="history" element={<History />} />
            <Route path="home/products/:productId" element={<SingleProducts />} />
            <Route path="wishlists" element={<Wishlists />} />
          </Route>
          <Route path="create-products" element={<CreateProduct />} />
          <Route path="/log-in" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/' element={<Navigate to='/log-in' />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
