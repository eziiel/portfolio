import React from "react"
import { Contato } from "../components/contato"
import { Experiencia } from "../components/experiencia"
import { Inicio } from "../components/inicio"
import { NavBar } from "../components/navBar"
import { Projetos } from "../components/projetos"
import { Sobre } from "../components/sobre"
import { ContextRefProvider } from "../context"
import Global from "../styleds/global"
import * as S from "../styleds/PageIndex"

export const Home: React.FC = () => {
  const NavMove = React.useRef<HTMLDivElement>(null)
  // const [clickNav, setClickNav] = React.useState(false)
  // const [ref, setRef] = React.useState: Element | null()
  window.alert("Projeto em desenvolvimento! 🔧🚧🚀")

  const mouseMove = React.useCallback((e: Event): void => {
    console.log(e)
  }, [])

  const handleMouseDown = React.useCallback((): void => {
    // setClickNav(true)
    if (NavMove.current != null)
      NavMove.current.addEventListener("mousemove", mouseMove)
    // console.log(clickNav);
  }, [])

  const handleMouseUp = React.useCallback((): void => {
    // setClickNav(false)
    if (NavMove.current != null)
      NavMove?.current.removeEventListener("mousemove", mouseMove)
    // console.log(clickNav)
  }, [])

  return (
    <ContextRefProvider>
      <S.AppDivStyled
        id="app"
        ref={NavMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Global />
        <NavBar />
        <S.AppMain>
          <Inicio />
          <Sobre />
          <Experiencia />
          <Projetos />
          <Contato />
        </S.AppMain>
      </S.AppDivStyled>
    </ContextRefProvider>
  )
}
