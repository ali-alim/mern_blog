import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

function TopBar() {
  
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">HOME</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="link">ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="link">CONTACT</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="link">WRITE</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src="https://media.istockphoto.com/photos/anonymous-profile-young-man-silhouette-picture-id157681821?k=20&m=157681821&s=612x612&w=0&h=_2VI9xdHw8F3_ebnhlFsZ7dEFbsRGHq07pw-PAwCMQY=" alt="profile_image" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>          
          )
        }
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;

