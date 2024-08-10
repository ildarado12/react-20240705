import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item; 
        return acc
    }, {}),
    ids: normalizedDishes.map(({id}) => id),
};

export const disheSlice = createSlice({
    name: `dishe`,
    initialState,
    selectors: {
        selectDisheById: (state, id) => state.entities[id],
    }
});

export const {selectDisheById} = disheSlice.selectors; 
