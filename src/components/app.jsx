import { ThemeContextProvider } from "./theme-context/context";
import { UserContextProvider } from "./login-context/context";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/router";
import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={Router} />
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
