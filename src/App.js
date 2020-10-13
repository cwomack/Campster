import React, {Component} from 'react';
import './App.css';
import { Route, NavLink} from 'react-router-dom';
import * as tripAPI from "./services/trips-api";
import MyTripPage from './components/MyTripPage/MyTripPage';
import NewTripPage from './components/NewTripPage/NewTripPage';
import TripDetailPage from './components/TripDetailPage/TripDetailPage';
import EditTripPage from './components/EditTripPage/EditTripPage';

class App extends Component {
  state = {
    trips: [],
  };

  async componentDidMount () {
    const trips = await tripAPI.getAll();
    this.setState({trips});
  }

  handleNewTrip = async newTripData => {
    const newTrip = await tripAPI.create(newTripData);
    this.setState(
      state=> ({
        trips: [...state.trips, newTrip],
      }),
      () => this.props.history.push('/')
    );
  };

  handleDeleteTrip = async id => {
    await tripAPI.deleteTrip(id);
    this.setState(
      state => ({
        trips: state.trips.filter(t => t._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };

  handleUpdateTrip = async updatedTripData => {
    const updatedTrip = await tripAPI.update(updatedTripData);
    const newTripsArray = this.state.trips.map(t => 
      t._id === updatedTrip._id ? updatedTrip : t
    );
    this.setState(
      {trips: newTripsArray},
      () => this.props.history.push("/")
    );
  };

  render() {
    return(
      <div className="App">
        <header className="App-header">
          Welcome to Campster!
          <nav>
            <NavLink exact to="/">
              My Trips
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to="/add">
              New Trip
            </NavLink>
          </nav>
        </header>
        <main>
          <Route
            exact path="/"
            render={() => (
              <MyTripPage 
                trips={this.state.trips}
                handleDeleteTrip={this.handleDeleteTrip}
              />
            )}
          />
          <Route
            exact path="/add"
            render={() => <NewTripPage handleNewTrip={this.handleNewTrip} />}
          />
          <Route 
          exact path="details"
          render={({location}) => <TripDetailPage location={location} />}
          />
          <Route 
            exact path="/edit"
            render={({location}) => (
              <EditTripPage
                handleUpdateTrip={this.handleDeleteTrip}
                location={location}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
