import React from "react";

const StatsModal = ({ open }) => {
  if (open) {
    return <div className="modal"></div>;
  }
  return null;
};

export default StatsModal;
