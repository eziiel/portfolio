import React from "react"
import projetos from "../../assets/datas/dataProjetos.json"
import { Observe } from "../../assets/observer"
import { ProjetoCard } from "../../assets/projetoCard/projeto"
import { MM } from "../../assets/textCode/mm"
import { Title } from "../../styleds/forComponents/geral"
import * as N from "../navBar/styled"
import * as S from "./styled"

interface PropsProjeto {
  nome: string;
  id: number;
}

export const Projetos: React.FC = () => {
  const [projeto, setProjeto] = React.useState(projetos[0])

  const handleProjeto = (id: number): void => {
    setProjeto(projetos[id])
  }

  return (
    <S.ProjetosSection id="Projetos">
      <Observe reference="#Projetos" />
      <Title>
        <MM text="Projetos" />
      </Title>
      <S.ProjetoInfo>
        <N.Ul>
          {projetos.map(({ nome, id }: PropsProjeto) => (
            <N.Li key={nome} onClick={() => handleProjeto(id)}>
              <MM text={nome} />
            </N.Li>
          ))}
        </N.Ul>
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
