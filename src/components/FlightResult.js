// src/components/FlightResult.js

import React from 'react';
import { useSelector } from 'react-redux';
import { selectFlights } from '../store/searchSlice';

const FlightResult = () => {
    const flights = useSelector(selectFlights);

    return (
        <div>
            <h2>Uçuş Sonuçları</h2>
            {flights ? (
                <ul>
                    {flights.map((flight) => (
                        <li key={flight.id}>
                            {flight.origin} - {flight.destination} ({flight.date})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Uçuş bulunamadı.</p>
            )}
        </div>
    );
};

export default FlightResult;
