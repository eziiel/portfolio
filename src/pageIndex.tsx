import React from "react"
import { Inicio } from "./components/inicio"
import { Home } from "./pages"
import * as S from "./styleds/PageIndex"
import Global from "./styleds/global"

const App: React.FC = () => {
  return (
    <S.AppDivStyled>
      <Global />
      <Home />
      <S.AppMain>
        <Inicio />
      </S.AppMain>
    </S.AppDivStyled>
  )
}

export default App
