import React from "react"
import { Observe } from "../../assets/observer"
import { MM } from "../../assets/textCode/mm"
import { Title } from "../../styleds/forComponents/geral"
import * as S from "./styled"

export const Contato: React.FC = () => {
  return (
    <S.ContatoSection id="Contato">
      <Observe reference="#Contato" />
      <Title>
        <MM text="Contato" />
      </Title>
      <S.ContatoInfo>
        <MM text="E-mail para contato: eziielp10@hotmail.com" />
        <MM text="Portfólio feito por Eziel Pereira" />
      </S.ContatoInfo>
    </S.ContatoSection>
  )
}
