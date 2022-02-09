import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../header/Header";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    }
    fetchPosts()
  },[])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
