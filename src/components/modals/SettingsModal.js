import React, { useState } from "react";

const SettingsModal = ({
  open,
  setOpen,
  dateValue,
  onDateChange,
  setDateValue,
}) => {
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
          <section>
            <div>
              <label htmlFor="date">Date: </label>
              <div>
                <input
                  id="date"
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDateValue(e.target.value)}
                ></input>
                <button
                  type="submit"
                  htmlFor="date"
                  onClick={(e) => onDateChange(dateValue)}
                >
                  change
                </button>
                <p>CHANGING THE DATE WILL RESET CURRENT GAME</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  return null;
};

export default SettingsModal;
