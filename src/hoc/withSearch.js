import React, { useState } from "react";

const withSearch = (WrappedComponent) => {
  const WithSearch = ({ ...props }) => {
    const [filteredStars, setFilteredStars] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
    const filteredResult = (searchTerm) => {
      return props.stars.filter((star) =>
        star.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setFilteredStars(filteredResult(searchTerm));
      setSearchTerm("");
    };

    return (
      <>
        <div className='search'>
          <form onSubmit={handleSubmit}>
            <label>Search</label>
            <input type='text' onChange={handleChange} />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <WrappedComponent stars={filteredStars} />
      </>
    );
  };
  return WithSearch;
};

export default withSearch;
