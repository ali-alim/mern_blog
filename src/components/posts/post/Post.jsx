import { Link } from "react-router-dom";
import "./post.css";

function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt=""/>}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">
        {post.desc}
        {
        /* <br />
          <p>
            <span>overflow</span>: hidden;
          </p>
          <p>
            <span>text-overflow</span>: ellipsis;
          </p>
          <p>
            <span>display</span>: -webkit-box;
          </p>
          <p>
            <span>-webkit-line-clamp</span>:4;
          </p>
          <p>
            <span>-webkit-box-orient</span>:vertical;
          </p> */}
<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        excepturi nisi dolorum debitis quis, totam ex cupiditate! Porro odio,
        omnis dolores qui reprehenderit quod ipsam enim tempore minima, beatae
        voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestias excepturi nisi dolorum debitis quis, totam ex cupiditate!
        Porro odio, omnis dolores qui reprehenderit quod ipsam enim tempore
        minima, beatae voluptas. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Molestias excepturi nisi dolorum debitis quis, totam
        ex cupiditate! Porro odio, omnis dolores qui reprehenderit quod ipsam
        enim tempore minima, beatae voluptas.
      </p>
    </div>
  );
}

export default Post;
