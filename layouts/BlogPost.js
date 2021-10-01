import React from "react";

const BlogPost = ({ children }) => {
  return (
    <div>
      <h1>Blog</h1>
      {children}
    </div>
  );
};

export default BlogPost;
