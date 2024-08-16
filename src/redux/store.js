import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { disheSlice } from "./entities/dishes";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { cartSlice } from "./ui/cart/cart";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [disheSlice.name]: disheSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
    },
});
