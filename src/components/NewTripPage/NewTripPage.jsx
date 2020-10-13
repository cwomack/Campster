import React, { Component } from "react";

class NewTripPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: "Bucket List Camping",
            city: "Grand Canyon",
            state: "AZ",
            date: Date,
            lists: [],
        },
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTrip(this.state.formData);
    };

    handleChange = e => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity(),
        });
    };

    render() {
        return (
            <>
                <h1>New Trip</h1>
                <form
                    ref={this.formRef}
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <label>Trip Name (required)</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Destination City(required)</label>
                        <input
                            className="form-control"
                            name="city"
                            value={this.state.formData.city}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input
                            className="form-control"
                            name="state"
                            value={this.state.formData.state}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input
                            className="form-control"
                            name="date"
                            value={this.state.formData.date}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >
                        Add Trip
                    </button>
                </form>
            </>
        );
    }
}
export default NewTripPage;