import React from "react";
import TripCard from "../../components/TripCard/TripCard";

function TripDetailPage(props) {
    const trip = props.location.state.trip;
    return (
        <>
            <h1>Trip Details:</h1>
            <TripCard key={trip._id} trip={trip} />
        </>
    );
}

export default TripDetailPage;