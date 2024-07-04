import React from "react"
import Article from "./Article"
import { title } from "process"

export default function ArticleList({posts}) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key= {post.id}
          title= {post.title}
          date= {post.date}
          preview= {post.preview}
        />
      ))}
      
    </main>
  )
}