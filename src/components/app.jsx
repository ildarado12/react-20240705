import { Layout } from "./layout/layout";
import { ThemeContextProvider } from "./theme-context/context";
import { UserContextProvider } from "./login-context/context";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { RestaurantsPage } from "./restaurants-page/restaurants-page";
import { RestaurantPage } from "./restaurant-page/restaurant-page";
import { HomePage } from "./home-page/home-page";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Layout />,
    children: [
      {
        path: `/restaurants`,
        element: <RestaurantsPage />,
        children: [
          {
            path: `:restaurantId`,
            element: <RestaurantPage />,
          },
        ],
      },
      {
        path: `/home-page`,
        element: <HomePage />,
      },
    ],
    errorElement: <div>Not Found</div>,
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
