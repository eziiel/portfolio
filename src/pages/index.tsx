import React from "react"
import { Contato } from "../components/contato"
import { Experiencia } from "../components/experiencia"
import { Inicio } from "../components/inicio"
import { NavBar } from "../components/navBar"
import { Sobre } from "../components/sobre"
import Global from "../styleds/global"
import * as S from "../styleds/PageIndex"

export const Home: React.FC = () => {
  return (
    <>
      <S.AppDivStyled>
        <Global />
        <NavBar />
        <S.AppMain>
          <Inicio />
          <Sobre />
          <Experiencia />
          <Contato />
        </S.AppMain>
      </S.AppDivStyled>
    </>
  )
}
