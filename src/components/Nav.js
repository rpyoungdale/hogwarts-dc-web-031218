import piggy from "../porco.png";
import React from "react";

const Nav = props => {
  return (
    <div className="navWrapper">
      <span className="headerText">Ryan's Pigs</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br />
      <br />
      <div>
        <select onChange={props.filterBy}>
          <option>Filter</option>
          <option id="filter-name">Filter By Name</option>
          <option id="filter-weight">Filter By Weight</option>
        </select>
        <select onChange={props.filterGreased}>
          <option id="all-pigs">All Pigs</option>
          <option id="greased-pigs">Greased Pigs</option>
          <option id="not-greased">Not Greased Pigs</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
