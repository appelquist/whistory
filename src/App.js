import React, { Component } from 'react';
import { getStations, getTemperatureData } from './APICalls';
import './App.css';
import FindStationForm from './FindStationForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: {}
    }
    this.getData = this.getData.bind(this);
  }

  getData(station) {
    getTemperatureData(station, 7);
  }

  async componentDidMount() {
  }
  render() {
    return (
      <div>
        <FindStationForm getData={this.getData}/>
      </div>
    )
  }
}

export default App;
