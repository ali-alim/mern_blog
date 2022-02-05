import Posts from "./components/posts/Posts";
import SinglePost from "./components/singlePost/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {

  const user = false;

  return (
    <div>
      <TopBar />
      
      <Routes>
       
        <Route exact path="/" element={<Home />} />
        <Route path="/mern_blog" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings/> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Posts /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      
    </div>
  );
}

export default App;
