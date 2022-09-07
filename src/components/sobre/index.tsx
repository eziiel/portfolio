import React from "react"
import * as S from "./styled"
import { Title } from "../../styleds/forComponents/geral"
import { MM } from "../../assets/mm"
import Data from "../../assets/dataText.json"

export const Sobre: React.FC = () => {
  const data = Data[0].sobre
  return (
    <S.SobreSection id="Sobre">
      <Title>
        <MM text="Sobre" />
      </Title>
      <S.SobreInfo>
        {data.text.map(text => (
          <S.Info key={text}>{text}</S.Info>
        ))}
      </S.SobreInfo>
    </S.SobreSection>
  )
}
