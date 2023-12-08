import React from "react"
import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"
import Avatar from "./Avatar"

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/123518333?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Possomato</strong>
              <time
                title="06 de Dezembro às 09:28"
                dateTime="2023-12-06  09:28:12"
              >
                Comentado há 1h
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={22} />
            </button>
          </header>
          <p>Muito bom Teste, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
