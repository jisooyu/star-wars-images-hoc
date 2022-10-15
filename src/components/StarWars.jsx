import React from "react";
import withSearch from "../hoc/withSearch";
import StarWarsList from "./StarWarsList";

const StarWars = ({ ...props }) => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div className='grid'>
        {props.stars.map((star) => (
          <StarWarsList key={star.id} star={star} />
        ))}
      </div>
    </div>
  );
};

export default withSearch(StarWars);
