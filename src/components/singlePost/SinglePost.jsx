import React from "react";
import "./singlePost.css"

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://miro.medium.com/max/700/1*r0B6sCMzMp6ymF2tRheWbA.jpeg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Hiding article with webkit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>ALI M.</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laborum
          vero, sit placeat excepturi id modi deserunt quam cumque ad est
          nesciunt recusandae praesentium molestias quaerat itaque? Temporibus,
          nostrum facilis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur culpa quibusdam earum, maxime sapiente nisi
          excepturi porro asperiores inventore perferendis adipisci saepe
          accusamus, eaque ipsam, rem harum aspernatur quasi ducimus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Vel numquam nihil
          aliquid earum nisi quod molestias eos suscipit unde omnis, deleniti
          adipisci similique optio, facilis, magnam ipsa sunt quis. Praesentium!

          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laborum
          vero, sit placeat excepturi id modi deserunt quam cumque ad est
          nesciunt recusandae praesentium molestias quaerat itaque? Temporibus,
          nostrum facilis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur culpa quibusdam earum, maxime sapiente nisi
          excepturi porro asperiores inventore perferendis adipisci saepe
          accusamus, eaque ipsam, rem harum aspernatur quasi ducimus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Vel numquam nihil
          aliquid earum nisi quod molestias eos suscipit unde omnis, deleniti
          adipisci similique optio, facilis, magnam ipsa sunt quis. Praesentium!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
