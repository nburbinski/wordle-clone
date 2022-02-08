import React from "react";

const SettingsModal = ({ open, setOpen }) => {
  if (open) {
    return (
      <div className="modal">
        <div className="modalContent">
          <div className="modalHeader">
            <h3>SETTINGS</h3>
            <button className="modalClose" onClick={() => setOpen(false)}>
              X
            </button>
          </div>
          <section></section>
        </div>
      </div>
    );
  }
  return null;
};

export default SettingsModal;
