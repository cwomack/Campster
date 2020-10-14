import React from "react";
import {Link} from "react-router-dom";
import "./TripListItem.css";

function TripListItem(props) {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{props.trip.name}</h3>
            </div>
            <div className="panel-footer TripListItem-action-panel">
                <Link
                    className="btn btn-xs btn-info"
                    to={{
                        pathname: "/details",
                        state: {trip: props.trip},
                    }}
                >DETAILS</Link>

                <Link
                    className="btn btn-xs btn-warning"
                    to={{
                        pathname: "/edit",
                        state: {trip: props.trip},
                    }}
                >EDIT</Link>

                <button
                    className="btn btn-xs btn-danger margin-left-10"
                    onClick={() => props.handleDeleteTrip(props.trip._id)}
                >DELETE</button>

            </div>
        </div>
    );
}

export default TripListItem;
