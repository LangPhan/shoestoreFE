import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CartDetail from "./components/Cart/CartDetail/index.jsx";
import CartAddress from "./components/Cart/Address/index.jsx";
import CartPayment from "./components/Cart/Payment/index.jsx";
import { Orders, Wrapper } from "./components/Dashboard/index.jsx";
import Products from "./components/Dashboard/Products/Products.jsx";

function App() {
  //Create route for app
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootPage />} errorElement={<ErrorPage />}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route
            path="/product-detail/:productName/:categoryId"
            element={<ProductDetailPage />}
          ></Route>
          <Route path="/cart" element={<CartPage />}>
            <Route index element={<CartDetail />}></Route>
            <Route path="address" element={<CartAddress />}></Route>
            <Route path="payment" element={<CartPayment />}></Route>
          </Route>
        </Route>

        <Route
          path="/"
          element={<Wrapper></Wrapper>}
          errorElement={<ErrorPage />}
        >
          <Route path="/dashboard/orders" element={<Orders></Orders>}></Route>
          <Route
            path="/dashboard/products"
            element={<Products></Products>}
          ></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
