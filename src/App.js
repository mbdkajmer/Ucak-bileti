// App.js

import React from 'react';
import { Provider } from 'react-redux';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResult from './components/FlightResult';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div>
                <FlightSearchForm />
                <FlightResult />
            </div>
        </Provider>
    );
}

export default App;
