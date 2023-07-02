import React from 'react'
import projetos from '../../api/dataProjetos.json'
import { Observe } from '../../assets/observer'
import { ProjetoCard } from '../../assets/projetoCard/projeto'
import { MM } from '../../assets/textCode/mm'
import { ContextRef } from '../../context'
import { Title } from '../../styleds/forComponents/geral'
import * as N from '../../components/navBar/styled'
import { DropDownProjeto } from './dropDownProjetos'
import * as S from './styled'

interface PropsProjeto {
  nome: string;
  id: number;
}

export const Projetos: React.FC = () => {
  const { projetoId } = React.useContext(ContextRef)
  const [projeto, setProjeto] = React.useState(projetos[0])

  const handleProjeto = (id: number): void => {
    setProjeto(projetos[id])
  }

  React.useEffect(() => {
    setProjeto(projetos[projetoId])
  }, [projetoId])

  return (
    <S.ProjetosSection id="Projetos">
      <Observe reference="#Projetos" />
      <Title>
        <MM text="Projetos" />
      </Title>
      <S.ProjetoInfo>
        <S.Ul>
          {projetos.map(({ nome, id }: PropsProjeto) => (
            <N.Li key={nome} onClick={() => handleProjeto(id)}>
              <MM text={nome} />
            </N.Li>
          ))}
        </S.Ul>
        <DropDownProjeto />
        <ProjetoCard
          links={projeto.links}
          infoName={projeto.infoName}
          infoText={projeto.infoText}
          img={projeto.img}
          alt={projeto.alt}
          id={projeto.id}
          nome={projeto.nome}
        />
      </S.ProjetoInfo>
    </S.ProjetosSection>
  )
}
