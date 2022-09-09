import React from "react"
import * as S from "./styled"
import { Title } from "../../styleds/forComponents/geral"
import Data from "../../assets/datas/dataText.json"
import { MM } from "../../assets/textCode/mm"

export const Inicio: React.FC = () => {
  const inicio = Data[0].inicio

  return (
    <S.InicioSection id="Início">
      <Title>
        <MM text="Portfólio" />
      </Title>
      <S.InicioInfo>
        {inicio.text.map(text => (
          <S.Info key={text}>{text}</S.Info>
        ))}
      </S.InicioInfo>
    </S.InicioSection>
  )
}
