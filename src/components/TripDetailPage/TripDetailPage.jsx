import React from 'react';
import './TripDetailPage.css';
import TripCard from "../../components/TripCard/TripCard";

function TripDetailPage(props) {
    const trip = props.location.state.trip;
    return (
        <div>
            <h1>Trip Details:</h1>
            <TripCard key={trip._id} trip={trip} />
        </div>
    );
}

export default TripDetailPage