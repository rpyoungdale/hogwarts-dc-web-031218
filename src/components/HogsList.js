import React from "react";
import HogItem from "./HogItem";

const HogsList = props => {
  return (
    <div className="ui grid container">
      {props.hogsArr.map(hog => {
        return <HogItem key={hog.id} hog={hog} />;
      })}
    </div>
  );
};

export default HogsList;
