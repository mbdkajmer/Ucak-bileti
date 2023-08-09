import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFlightResult } from '../store/flightSlice';

const FlightSearchForm = () => {
    const dispatch = useDispatch();
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');

    // eslint-disable-next-line no-unused-vars
    const destinations = useSelector((state) => state.destination.destinations);

    const handleSearch = () => {
        //
        const flightResult = checkFlights(departure, arrival);
        dispatch(setFlightResult(flightResult));
    };

    const checkFlights = (departureCity, arrivalCity) => {

        if (departureCity === 'Düsseldorf' && arrivalCity === 'Antalya') {
            return ['Uçuş 1', 'Uçuş 2', 'Uçuş 3']; // Örnek uçuşlar
        } else {
            return null;
        }
    };

    return (
        <div>
            <h2>Uçuş Arama Formu</h2>
            <label>Kalkış Şehri:</label>
            <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
            <label>Varış Şehri:</label>
            <input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
            <button onClick={handleSearch}>Uçuşu Bul</button>
        </div>
    );
};

export default FlightSearchForm;
