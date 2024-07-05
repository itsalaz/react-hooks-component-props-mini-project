import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList"
import About from "./About"
import Header from "./Header"


export default function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      <Header name={name}/>
      <About image={image} about={about}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

