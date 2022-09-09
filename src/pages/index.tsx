import React from "react"
import { Contato } from "../components/contato"
import { Experiencia } from "../components/experiencia"
import { Inicio } from "../components/inicio"
import { NavBar } from "../components/navBar"
import { Projetos } from "../components/projetos"
import { Sobre } from "../components/sobre"
import Global from "../styleds/global"
import * as S from "../styleds/PageIndex"

export const Home: React.FC = () => {
  window.alert("Projeto em desenvolvimento! 🔧🚧🚀")
  return (
    <>
      <S.AppDivStyled>
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
    </>
  )
}
