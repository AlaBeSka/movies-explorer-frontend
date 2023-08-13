import React from "react";
import './CheckBox.css';

function CheckBox()  {
    return(
        <label className="checkbox">
            <input type="checkbox" className="checkbox__input"></input>
            <span className="checkbox__switch"></span>
        </label>
    )
}

export default CheckBox;