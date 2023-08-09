// src/store/destinationSlice.js

import { createSlice } from '@reduxjs/toolkit';
import destinationData from '../data/destination.json';

const initialState = {
    destinations: destinationData.destinations,
};

const destinationSlice = createSlice({
    name: 'destination',
    initialState,
    reducers: {},
});

export default destinationSlice.reducer;
