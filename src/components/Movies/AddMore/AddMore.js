import React from "react";
import "./AddMore.css";

function AddMore({ handleShowMore }) {
  return (
    <div className="more">
      <button className="more__button" onClick={handleShowMore}>Ещё</button>
    </div>
  );
}

export default AddMore;
