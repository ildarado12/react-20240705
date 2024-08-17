import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { MenusPage } from "../menus-page/menus-page";
import { MenuPage } from "../menu-page/menu-page";
import { ReviewsPage } from "../reviews-page/reviews-page";
import { HomePage } from "../home-page/home-page";
import { ErrorPage } from "../error-page/error-page";

export const ROUTER = createBrowserRouter([
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
            children: [
              {
                path: `:menus`,
                element: <MenusPage />,
                children: [
                  {
                    path: `:menuId`,
                    element: <MenuPage />,
                  },
                ],
              },
              {
                path: `:reviews`,
                element: <ReviewsPage />,
              },
            ],
          },
        ],
      },
      {
        path: `/home-page`,
        element: <HomePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
