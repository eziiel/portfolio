import React from 'react'
import { Contato } from './contato'
import { Experiencia } from './experiencia'
import { Inicio } from './inicio'
import { NavBar } from '../components/navBar'
import { Projetos } from './projetos'
import { Sobre } from './sobre'
import { ContextRefProvider } from '../context'
import Global from '../styleds/global'
import * as S from '../styleds/PageIndex'

export const Home: React.FC = () => {
  return (
    <ContextRefProvider>
      <S.AppDivStyled id="app">
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
