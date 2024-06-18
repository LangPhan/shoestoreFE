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

function App() {
  //Create route for app
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootPage />}
        errorElement={<ErrorPage />}
      >
        <Route
          path=""
          element={<HomePage />}
        ></Route>
        <Route
          path="/product"
          element={<ProductPage />}
        ></Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
