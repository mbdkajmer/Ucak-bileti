// src/store/searchSlice.js

import { createSlice } from '@reduxjs/toolkit';
import searchData from '../data/search.json';

const initialState = {
    flights: searchData.flights,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
});

export const selectFlights = (state) => state.search.flights;

export default searchSlice.reducer;
