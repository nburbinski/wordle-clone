import React from "react";

const Alert = ({ message }) => {
  return (
    <div style={{ display: `${message ? "block" : "none"}` }} className="alert">
      {message}
    </div>
  );
};

export default Alert;
