import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from ".";

export const getRestaurants = createAsyncThunk(`restaurant/getRestaurants`, 
    async(_, {rejectWithValue, }) => {
    const response = await fetch(`http://localhost:3001/api/restaurants`);
    const result = await response.json();

    if (!result.length) {
        rejectWithValue(`empty result`);
    }

    return result;
}, 
{
    condition: (_, {getState}) => {
        return selectRestaurantsIds(getState()).length === 0;
    },
});