import React from "react";
import "./AddMore.css";

function AddMore({ onAddMore }) {
  return (
    <section className="more">
      <button type="button" className="more__button" onClick={onAddMore}>
        Ещё
      </button>
    </section>
  );
}

export default AddMore;
