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
          <span className="postCat">HTML</span>
          <span className="postCat">CSS</span>
        </div>
        <span className="postTitle">
          Hiding the part of text with webkit CSS properties
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        To hide the part of the text and show only a few strings of the article,
        you can use the below css properties:
        <br />
        <div>
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
        </p>
        </div>
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
