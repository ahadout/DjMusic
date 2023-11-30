import React from "react";
import "../assets/css/Footer.css";
import Newsletter from "./Newsletter";
import logo from "../assets/images/djmusic_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faBehance,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
        <Newsletter class="Footer_Newsletter" />
        <div id="pages-footer">
          <ul>
            <li>
              {/* <a href="#">About us</a> */}
              <Link className='footer-link' to="/">Home</Link>
            </li>
            <li>
              {/* <a href="#">FAQ</a> */}
              <Link className='footer-link' to="#">FAQ</Link>
            </li>
          </ul>
          <ul>
            <li>
              {/* <a>Our plans</a> */}
              <Link className='footer-link' to="/cloud-drives">Cloud Drives</Link>
            </li>
            <li>
              {/* <a>Contact us</a> */}
              <Link className='footer-link' to="#">Contact us</Link>
            </li>
          </ul>
          <ul>
            <li>
              {/* <a>Hard drives</a> */}
              <Link className='footer-link' to="/hard-drives">Hard Drives</Link>
            </li>
            <li>
              {/* <a>Preview</a> */}
              <Link className='footer-link' to="#">Preview</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
