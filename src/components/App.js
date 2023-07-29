import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./Article";

console.log(blogData);

const App = () => { 
  const {blogName, about, articles } = blogData;

  return (
    <div>
      <Header blogName={blogName} />
      <About imageSrc={about.image} aboutText={about.text} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
