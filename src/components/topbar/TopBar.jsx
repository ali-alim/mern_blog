import React from "react";
import "./topbar.css";

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://media.istockphoto.com/photos/anonymous-profile-young-man-silhouette-picture-id157681821?k=20&m=157681821&s=612x612&w=0&h=_2VI9xdHw8F3_ebnhlFsZ7dEFbsRGHq07pw-PAwCMQY=" alt="profile_image" />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;

