import React from "react";
import { Link } from "react-router-dom";

function TripCard({trip}) {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{trip.name}</h3>
            </div>
            <div className="panel-body">
                <dl>
                    <dt>City</dt>
                    <dd>{trip.city}</dd>
                    <dt>State</dt>
                    <dd>{trip.state}</dd>
                </dl>
            </div>
            <div className="panel-footer">
                <Link to="/">back to My Trips</Link>
            </div>
        </div>
    );
}

export default TripCard;