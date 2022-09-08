import React from "react"
import * as S from "./styled"
import { Title } from "../../styleds/forComponents/geral"
import ferramentas from "../../assets/ferramentas.json"
import { MM } from "../../assets/mm"

export const Experiencia: React.FC = () => {
  return (
    <S.ExperienciaSection id="Experiencia">
      <Title>
        <MM text="Experiencia" />
      </Title>
      <S.ExperienciaInfo>
        <S.Ferramentas>
          {ferramentas.map(({ id, src, alt, text }) => (
            <S.IconsFerramentas key={id}>
              <S.Img src={src} alt={alt} />
              <S.NameIcon>{text}</S.NameIcon>
            </S.IconsFerramentas>
          ))}
        </S.Ferramentas>
        <S.InfoFerramentas>Entre outras...</S.InfoFerramentas>
      </S.ExperienciaInfo>
    </S.ExperienciaSection>
  )
}
