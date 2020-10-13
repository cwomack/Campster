import React, {Component} from "react";
import {Link} from "react-router-dom";
import './EditTripPage.css'; 

class EditTripPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.trip,
    };

    formRef = React.createRef();

    handleSubmit = e => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        };
        this.setState({
            formData,
            invalidForm: !this.formRef.Ref.current.checkValidity(),
        });
    };

    render() {
        return (
            <>
                <h1>Edit Trip</h1>
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
                        <label>City (required)</label>
                        <input
                            className="form-control"
                            name="city"
                            value={this.state.formData.city}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>State (required)</label>
                        <input
                            className="form-control"
                            name="state"
                            value={this.state.formData.state}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date (required)</label>
                        <input
                            className="form-control"
                            name="date"
                            value={this.state.formData.date}
                            onChange={this.handleChange}
                            required
                            type={Date}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        Save Trip Changes 
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">CANCEL</Link>
                </form>
            </>
        );
    }
}
export default EditTripPage;