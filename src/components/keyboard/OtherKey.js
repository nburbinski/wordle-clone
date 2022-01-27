import React from "react";

const OtherKey = ({ onClick, type }) => {
  const handleClick = (e) => {
    onClick(type);
  };
  return (
    <div className="letter" onClick={handleClick}>
      {type}
    </div>
  );
};

export default OtherKey;
