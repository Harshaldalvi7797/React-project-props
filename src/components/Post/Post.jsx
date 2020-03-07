import React from "react";
import "./post.css";

const Post = props => {
  console.log(props);
  return (
    <div className="post-container">
      <h1 className="heading">Title:{props.post.title}</h1>
      <img className="image" src={props.post.img} alt="news" />
      <p>Article:{props.post.body}</p>
      <div className="info">
        {/* <h5>{props.number}}</h5> */}
        <h4> Author:{props.post.author}</h4>
      </div>
    </div>
  );
};
export default Post;
