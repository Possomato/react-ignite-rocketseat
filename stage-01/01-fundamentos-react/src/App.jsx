import Post from "./Post"
import "./global.css"
import { Header } from "./components/Header"
import styles from "./app.module.css"
import { SideBar } from "./components/SideBar"

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post author="aaaa" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam rem dolores incidunt. Voluptatibus" />

          <Post author="bbbb" content=" aspernatur quo ducimus tenetur ex tempora excepturi sint, alias aliquam necessitatibus, laborum voluptates, soluta sapiente neque." />
        </main>
      </div>
    </>
  )
}

export default App
