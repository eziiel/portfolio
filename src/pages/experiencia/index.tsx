import React from 'react'
import * as S from './styled'
import { Title } from '../../styleds/forComponents/geral'
// import ferramentas from '../../api/ferramentas.json'
import { MM } from '../../assets/textCode/mm'
import { Observe } from '../../assets/observer'

export const Experiencia: React.FC = () => {
  const [ferramentas, setFerramentas] = React.useState([])

  React.useEffect(() => {
    fetch('../../api/ferramentas.json')
      .then((response) => response.json())
      .then((res) => setFerramentas(res))
  }, [])

  return (
    <S.ExperienciaSection id="Experiencia">
      <Observe reference="#Experiencia" />
      <Title>
        <MM text="Experiencia" />
      </Title>
      <S.ExperienciaInfo>
        <S.Ferramentas>
          {ferramentas?.map(({ id, src, alt, text }) => (
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
