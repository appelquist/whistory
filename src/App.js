import React, { Component } from 'react';
import { getStations } from './APICalls';
import Station from "./Station"
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
    console.log(station);
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
