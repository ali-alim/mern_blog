import Posts from "./components/posts/Posts";
import SinglePost from "./components/singlePost/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Setting" element={<Setting />} />

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
