import { useEffect, useState } from "react";
import axios from "axios"
import "./sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {


  const [cats, setCats] = useState([]);


  useEffect(()=>{
    const fetchCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    fetchCats();
  }, [])


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="aboutme_photo"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          inventore vitae, quod ipsum blanditiis beatae numquam nostrum, earum
          hic sint impedit illo consectetur! Odit aliquam sunt hic odio quos
          labore!
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
          
          {cats.map((c)=> (
            <Link to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
              </Link>
              )
            )}
          

          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
