import React from "react";
import "../../src/assets/css/Components/Newsletter.css";
function Newsletter() {
  return (
    <div id="Newsletter">
      <h1>Join us and get all our Updates!</h1>
      <p>
        Feel More fan and enjoy the favourite music with your best persones!
      </p>
      <div>
        <label>Email</label>
        <input placeholder="Your Email Here" />
      </div>
      <button>SEND</button>
    </div>
  );
}

export default Newsletter;
