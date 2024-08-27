import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import { RestaurantPage } from "../restaurant-page/restaurant-page";
import { HomePage } from "../home-page/home-page";
import { ErrorPage } from "../error-page/error-page";
import { MenusList } from "../menus-list/menus-list";
import { ReviewsList } from "../reviews-list/reviews-list";
import { DishesPage } from "../dishes-page/dishes-page";
import { DishPage } from "../dish-page/dish-page";

export const Router = createBrowserRouter([
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
                element: <MenusList />,
              },
              {
                path: `:reviews`,
                element: <ReviewsList />,
              },
            ],
          },
        ],
      },
      {
        path: `/dish`,
        element: <DishesPage />,
        children: [
          {
            path: `:dishId`,
            element: <DishPage />,
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
