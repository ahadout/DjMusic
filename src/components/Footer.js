import React from "react";
import "../assets/css/Footer.css";
import logo from "../assets/images/djmusic_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faBehance,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
      <div class="container">
        <div id="logo_social_media-footer">
          <img src={logo} class="logo-footer" />
          <div class="social_media-footer">
            <i>
              <FontAwesomeIcon icon={faFacebook} />
            </i>
            <i>
              <FontAwesomeIcon icon={faYoutube} />
            </i>
            <i>
              <FontAwesomeIcon icon={faBehance} />
            </i>
            <i>
              <FontAwesomeIcon icon={faTumblr} />
            </i>
          </div>
        </div>
        <div id="join_us-footer">
          <p>Join us and get the all our Updates!</p>
          <div>
            <label for="">Email</label>
            <input id="email" placeholder="Your email here" />
          </div>
        </div>
        <div id="pages-footer">
          <ul>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Our plans</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Hard drives</a>
            </li>
            <li>
              <a>Preview</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
