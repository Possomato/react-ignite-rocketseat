import React from "react"
import { sidebar, profile, cover } from "./SideBar.module.css"
import { PencilSimpleLine } from "phosphor-react"
import Avatar from "./Avatar"

export function SideBar() {
  return (
    <aside className={sidebar}>
      <img
        className={cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
      />

      <div className={profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/123518333?v=4" />
        <strong>Gabriel Bonifacio Possomato</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
