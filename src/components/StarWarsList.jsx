import React from "react";

const StarWarsList = ({ ...props }) => {
  return (
    <div>
      <h1>{props.star.name}</h1>
      <p>height: {props.star.height} m</p>
      <p>weight: {props.star.mass} kg</p>
      <p>gender: {props.star.gender}</p>
      <p>home: {props.star.homeworld}</p>
      <img src={props.star.image} alt={"planet wars"} />
    </div>
  );
};

export default StarWarsList;
