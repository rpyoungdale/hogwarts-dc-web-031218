import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsList from "./HogsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogsArr: hogs
    };
  }

  filterBy = e => {
    const weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
    if (e.target.value === "Filter By Name") {
      let sortedHogs = hogs.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
      this.setState({
        hogsArr: sortedHogs
      });
    } else if (e.target.value === "Filter By Weight") {
      let sortedHogs = hogs.sort(function(a, b) {
        return a[weight] - b[weight];
      });
      this.setState({
        hogsArr: sortedHogs
      });
    }
  };

  filterGreased = e => {
    if (e.target.value === "Greased Pigs") {
      let sortedHogs = hogs.filter(hog => {
        return hog.greased === true;
      });
      this.setState({
        hogsArr: sortedHogs
      });
    } else if (e.target.value === "Not Greased Pigs") {
      let sortedHogs = hogs.filter(hog => {
        return hog.greased === false;
      });
      this.setState({
        hogsArr: sortedHogs
      });
    } else {
      this.setState({
        hogsArr: hogs
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav filterGreased={this.filterGreased} filterBy={this.filterBy} />
        <HogsList currHog={this.state.currHog} hogsArr={this.state.hogsArr} />
      </div>
    );
  }
}

export default App;
