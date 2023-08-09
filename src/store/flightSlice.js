// store/flightSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    flightResult: null,
};

const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        setFlightResult: (state, action) => {
            state.flightResult = action.payload;
        },
    },
});

export const { setFlightResult } = flightSlice.actions;
export default flightSlice.reducer;
