import React, { Component } from 'react';
import STATIONS_SEARCH_DATA from '../constants/searchData';

class StationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stationName: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const station = STATIONS_SEARCH_DATA.find(station => station.searchName.toLowerCase() === this.state.stationName.toLowerCase());
        const days = 6;
        this.props.getData(station, days);
    }

    handleChange(e) {
        this.setState({
            stationName: e.target.value
        });
    }

    render() {
        const { stationName } = this.state;
        return (
            <div className="FindStationForm-container">
                <form className="FindStationForm" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="stationName"
                        value={stationName}
                        onChange={this.handleChange}>
                    </input>
                    <button type="submit">
                        Go!
                    </button>
                </form>
            </div>
        )
    }
}

export default StationForm;