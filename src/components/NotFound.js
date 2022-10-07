import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";
import notfoundImage from "../images/notfoundImage.png";

export default function NotFound() {
  //   const history = useHistory();s
  return (
    <div className="notfound-container container">
      <div className="image-container">
        <img src={notfoundImage} alt="" />
      </div>

      <div class="message-box">
        <h1>404</h1>
        <p className="fs-1">Page not found</p>
        <div class="buttons-con">
          <div class="action-link-wrap">
            <Link
              onclick="history.back(-1)"
              class="link-button link-back-button"
            >
              Go Back
            </Link>
            <Link to="/" class="link-button">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
