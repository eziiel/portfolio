import React from "react"
import { MM } from "../../assets/mm"
import { Title } from "../../styleds/forComponents/geral"
import * as S from "./styled"
import * as N from "../navBar/styled"
import projetos from "../../assets/dataProjetos.json"

interface PropsProjeto {
  nome: string;
  vercel: string;
  github?: string;
}

export const Projetos: React.FC = () => {
  console.log(projetos)

  return (
    <S.ProjetosSection id="Projetos">
      <Title>
        <MM text="Projetos" />
      </Title>
      <S.ProjetoInfo>
        <N.Ul>
          {projetos.map(({ nome, vercel }: PropsProjeto) => (
            <N.Li key={nome}>
              <N.LinkForPage target="_blank" href={vercel}>
                <MM text={nome} />
              </N.LinkForPage>
            </N.Li>
          ))}
        </N.Ul>
        <S.ProjetoDados></S.ProjetoDados>
      </S.ProjetoInfo>
    </S.ProjetosSection>
  )
}
