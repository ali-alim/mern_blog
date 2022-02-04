import Posts from "./components/posts/Posts";
import SinglePost from "./components/singlePost/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


function App() {
  return (
    <div>
      <TopBar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Posts /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      <Login />
    </div>
  );
}

export default App;
