import React, { Component } from 'react';
import { getStations } from './APICalls';
import Station from "./Station"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: []
    }
  }
  async componentDidMount() {
    this.setState({
      stations: await getStations()
    });
    console.log(this.state.stations.map(s => ({ name: s.name, key: s.key, searchName: "" })))
  }
  render() {
    const stations = this.state.stations.map(station => (
      <Station name={station.name} id={station.key} />
    ));
    return (
      <div>
        [
         {stations}
        ]
      </div>
    )
  }
}

export default App;
