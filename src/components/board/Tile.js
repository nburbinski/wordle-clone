import React from "react";

const Tile = ({ value, status }) => {
  return (
    <div className={`tile ${status}`}>
      <p>{value}</p>
    </div>
  );
};

export default Tile;
