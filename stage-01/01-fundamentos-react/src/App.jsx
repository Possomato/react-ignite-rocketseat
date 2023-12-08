import Post from "./components/Post"
import "./global.css"
import { Header } from "./components/Header"
import styles from "./app.module.css"
import { SideBar } from "./components/SideBar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/123518333?v=4",
      name: "Gabriel Possomato",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Et, fugiat aspernatur quo obcaecati repellendus in quibusdam doloribus eum",
      },
      {
        type: "paragraph",
        content:
          "molestiae aliquam esse vero cum, aut ad minus. Odio omnis laudantium minus.",
      },
      { type: "link", content: "https://github.com/Possomato" },
    ],
    publishedAt: new Date("2023-12-7 13:48:27"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/6643122?v=4",
      name: "Mayk Brito",
      role: "Funça rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Et, fugiat aspernatur quo obcaecati repellendus in quibusdam doloribus eum",
      },
      {
        type: "paragraph",
        content:
          "molestiae aliquam esse vero cum, aut ad minus. Odio omnis laudantium minus.",
      },
      { type: "link", content: "https://github.com/maykbrito" },
    ],
    publishedAt: new Date("2023-12-7 13:48:27"),
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
