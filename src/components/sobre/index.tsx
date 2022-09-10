import React from "react"
import * as S from "./styled"
import { Title } from "../../styleds/forComponents/geral"
import { MM } from "../../assets/textCode/mm"
import Data from "../../assets/datas/dataText.json"
import { Observe } from "../../assets/observer"

export const Sobre: React.FC = () => {
  // const ref = React.useRef<HTMLElement>(null)
  // const { setRef} = React.useContext(ContextRef)
  const data = Data[0].sobre

  return (
    <S.SobreSection id="Sobre">
      <Observe reference="#Sobre" />
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
