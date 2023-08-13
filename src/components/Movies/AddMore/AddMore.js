import React from "react";
import "./AddMore.css";

function AddMore({ handleShowMore }) {
  return (
    <section className="more">
      <button type="button" className="more__button" onClick={handleShowMore}>Ещё</button>
    </section>
  );
}

export default AddMore;
