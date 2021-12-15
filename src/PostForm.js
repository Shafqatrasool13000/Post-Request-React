import axios from "axios";
import React, { useState } from "react";

const PostForm = () => {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      user: e.target[0].value,
      title: e.target[1].value,
      bod: e.target[2].value
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", obj)
      .then((res) => console.log("Response DAta", res))
      .catch((err) => console.log("Error", err));
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        name="user"
        placeholder="Name"
        value={user}
        onChange={handleUser}
      />
      <input
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleTitle}
      />
      <input
        name="body"
        placeholder="Description"
        value={body}
        onChange={handleBody}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
