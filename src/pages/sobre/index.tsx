/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import * as S from './styled'
import { Title } from '../../styleds/forComponents/geral'
import { MM } from '../../assets/textCode/mm'
import { Observe } from '../../assets/observer'

interface PropsExtendsInit {
  tag: string;
  nome: string;
  text: string[];
}
interface PropsExtendsAbout {
  tag: string;
  nome: string;
  text: string[];
}

interface PropsDataAbout {
  inicio: PropsExtendsInit;
  sobre: PropsExtendsAbout;
}

export const Sobre: React.FC = () => {
  const [dataAbout, setDataAbout] = React.useState<PropsDataAbout>()

  React.useEffect(() => {
    async function DataAbout() {
      const response = await fetch('api/dataText.json')
        .then((response) => response.json())
        .then((res) => res)
      setDataAbout(response[0])
    }
    DataAbout()
  }, [])

  return (
    <S.SobreSection id="Sobre">
      <Observe reference="#Sobre" />
      <Title>
        <MM text="Sobre" />
      </Title>
      <S.SobreInfo>
        {dataAbout?.sobre?.text.map((texts) => (
          <S.Info key={texts}>{texts}</S.Info>
        ))}
      </S.SobreInfo>
    </S.SobreSection>
  )
}
