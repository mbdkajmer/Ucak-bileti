// src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from './destinationSlice';
import searchReducer from './searchSlice';

const store = configureStore({
    reducer: {
        destination: destinationReducer,
        search: searchReducer,
    },
});

export default store;
