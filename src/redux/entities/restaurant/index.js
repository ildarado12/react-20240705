import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: `restaurant`,
    initialState: entityAdapter.getInitialState({requestStatus: `idle`}),
    extraReducers: (builder) => builder
    .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = `pending`;
    })
    .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = `rejected`;
    })
    .addCase(getRestaurants.fulfilled, (state, {payload}) => {
        state.requestStatus = `fulfilled`;

        entityAdapter.setAll(state, payload);
    }),
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
        selectRequestStatus: (state) => state.requestStatus,
    }
});

export const {selectRestaurantById, selectRestaurantsIds, selectRequestStatus} = restaurantSlice.selectors; 
