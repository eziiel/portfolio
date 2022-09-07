import React from "react"
import * as S from "./styled"
import { Title } from "../../styleds/forComponents/geral"

export const Inicio: React.FC = () => {
  return (
    <S.InicioSection>
      <Title id="inicio">{`<Inicio />`}</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        maxime!
      </p>
    </S.InicioSection>
  )
}
