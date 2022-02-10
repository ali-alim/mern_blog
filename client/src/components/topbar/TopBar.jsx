import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";



function TopBar() {
  
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }

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
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src="./photo of the last day_IMG_20211209.jpg" alt="profile_image" />
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

