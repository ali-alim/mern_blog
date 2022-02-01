import Header from '../../header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';
import './home.css';

function Home() {
  return <div className='home'>
    <Header />
    <div className='posts_sidebar'>
      <Posts />
      <Sidebar />
    </div>
  </div>;
}

export default Home;
