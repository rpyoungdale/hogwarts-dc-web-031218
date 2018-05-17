import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class HogItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  getImage = hogObj => {
    let pic = require(`../hog-imgs/${hogObj.name
      .replace(/\s/g, "_")
      .toLowerCase()}.jpg`);
    return pic;
  };

  toggleDetails = () => {
    if (this.state.showDetails) {
      this.setState({
        showDetails: false
      });
    } else {
      this.setState({
        showDetails: true
      });
    }
  };

  render() {
    return (
      <div className="four wide column">
        <div onClick={this.toggleDetails} className="ui raised link card">
          <div className="image">
            <img src={this.getImage(this.props.hog)} />
          </div>
          <div className="content">
            <p>{this.props.hog.name}</p>
            {this.state.showDetails ? (
              <div className="content">
                <div>Specialty: {this.props.hog.specialty}</div>
                <div>
                  Highest Medal Achieved:{" "}
                  {this.props.hog["highest medal achieved"]}
                </div>
                <div>Greased: {this.props.hog.greased ? "Yes" : "No"}</div>
                <div>
                  Weight:
                  {
                    this.props.hog[
                      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                    ]
                  }
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HogItem;
