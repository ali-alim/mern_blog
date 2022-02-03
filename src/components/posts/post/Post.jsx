import "./post.css";

function Post() {
  return (
      <div className="post">
        <img
          className="postImg"
          src="https://miro.medium.com/max/700/1*r0B6sCMzMp6ymF2tRheWbA.jpeg"
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
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
