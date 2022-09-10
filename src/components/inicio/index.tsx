import React from "react"
import * as S from "./styled"
import { Title } from "../../styleds/forComponents/geral"
import Data from "../../assets/datas/dataText.json"
import { MM } from "../../assets/textCode/mm"
import { Observe } from "../../assets/observer"

export const Inicio: React.FC = () => {
  const inicio = Data[0].inicio

  return (
    <S.InicioSection id="Início">
      <Observe reference="#Início" />
      <Title>
        <MM text="Início" />
      </Title>
      <S.InicioInfo>
        {inicio.text.map(text => (
          <S.Info key={text}>{text}</S.Info>
        ))}
      </S.InicioInfo>
    </S.InicioSection>
  )
}
