import React, { useState } from "react";

const PostForm = () => {
  const [user, setUser] = useState({
    userName:'',
    title:'',
    body:''
  });
  
  const handleChange = (e) => {
   setUser({e.target.name:e.target.value})
   

  };
  return (
    <div>
      <input name="user" placeholder='Name' value={user.userName} onChange={handleChange} />
      <input name="title" placeholder='Title' value={user.title} onChange={handleChange} />
      <input name="body" placeholder='Description' value={user.body} onChange={handleChange} />
    </div>
  );
};

export default PostForm;
