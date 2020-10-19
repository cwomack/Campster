import React, {Component} from "react";

class NewTripPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: "Bucket List Camping",
            city: "Grand Canyon",
            state: "AZ",
            user: this.props.user._id
        },
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleNewTrip(this.state.formData);
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
                        <label>Trip Name</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Destination City</label>
                        <input
                            className="form-control"
                            name="city"
                            value={this.state.formData.city}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Destination State</label>
                        <input
                            className="form-control"
                            name="state"
                            value={this.state.formData.state}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >Add Trip
                    </button>
                </form>
            </>
        );
    }
}
export default NewTripPage;