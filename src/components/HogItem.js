import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class HogItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }

  getImage = hogObj => {
    let pic = require(`../hog-imgs/${hogObj.name
      .replace(/\s/g, "_")
      .toLowerCase()}.jpg`);
    return pic;
  };

  handleDetailsClick = () => {
    this.setState({
      showDetails: true
    });
  };

  hideDetailsClick = () => {
    this.setState({
      showDetails: false
    });
  };

  render() {
    return (
      <div className="ui eight wide column">
        <div className="ui card">
          <img src={this.getImage(this.props.hog)} />
          <p>HogName: {this.props.hog.name}</p>
          {this.state.showDetails ? (
            <button onClick={this.hideDetailsClick}>Hide Details</button>
          ) : (
            <button onClick={this.handleDetailsClick}>Show Details</button>
          )}
          {this.state.showDetails ? (
            <div>
              <h4>Details</h4>
              <ul>
                <li>Specialty: {this.props.hog.specialty}</li>
                <li>
                  Highest Medal Achieved:{" "}
                  {this.props.hog["highest medal achieved"]}
                </li>
                <li>Greased: {this.props.hog["greased"] ? "True" : "False"}</li>
                <li>
                  Weight:
                  {
                    this.props.hog[
                      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                    ]
                  }
                </li>
              </ul>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default HogItem;
