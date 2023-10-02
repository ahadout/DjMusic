import React from "react";
import "../../src/assets/css/Components/Newsletter.css";
function Newsletter(props) {
  return (
    <div id="Newsletter" className={props.class}>
      <h1>Join us and get all our Updates!</h1>
      {props.description && <p>{props.description}</p>}
      <div>
        <label>Email</label>
        <input placeholder="Your Email Here" />
      </div>
      {props.sentBtn && <button>{props.sentBtn}</button>}
    </div>
  );
}
export default Newsletter;
