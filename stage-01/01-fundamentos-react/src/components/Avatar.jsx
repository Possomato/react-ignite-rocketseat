import React from "react"
import styles from "./Avatar.module.css"



export default function Avatar({ src, hasBorder = true }) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWhitheBoder : styles.avatar}
    />
  )
}
