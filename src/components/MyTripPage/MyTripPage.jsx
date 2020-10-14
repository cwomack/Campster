import React from "react";
import "./MyTripPage.css";
import TripListItem from "../TripListItem/TripListItem";

function MyTripPage(props) {
    return (
        <>
            <h1>My Trips</h1>
            <div className="MyTripPage-grid">
                {props.trips.map(trip => (
                    <TripListItem
                        trip={trip} 
                        key={trip._id}
                        handleDeleteTrip={props.handleDeleteTrip}
                    />
                ))}
            </div>
        </>
    );
}

export default MyTripPage;