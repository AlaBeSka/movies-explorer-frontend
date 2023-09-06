import React from "react";
import "./CheckBox.css";

function CheckBox({ isChecked, setIsChecked, onFilterCheckbox }) {
  function handleChange(e) {
    setIsChecked(e.target.checked);
    onFilterCheckbox(e.target.checked);
  }

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isChecked}
        onChange={handleChange}
      >
      </input>
      <span className="checkbox__switch"></span>
    </label>
  );
}

export default CheckBox;
