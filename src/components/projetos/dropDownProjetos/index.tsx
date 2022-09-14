import React from "react"
import * as S from "./styled"
import projetos from "../../../assets/datas/dataProjetos.json"
import { MM } from "../../../assets/textCode/mm"
import down from "../../../../public/images/utils/down.svg"
import up from "../../../../public/images/utils/up.svg"
import { ContextRef } from "../../../context"

interface PropsProjeto {
  nome: string;
  id: number;
}

export const DropDownProjeto: React.FC = () => {
  const [dropActive, setDropActive] = React.useState(false)
  // const [projetoAtual, setProjetoAtual] = React.useState("<Countries />")
  const { setProjetoId } = React.useContext(ContextRef)

  const handleProjeto = (nome: string, id: number): void => {
    // setProjetoAtual(`<${nome}/>`)
    setProjetoId(id)
  }

  const handleDrop = (): void => {
    setDropActive(!dropActive)
  }

  return (
    <S.Nav>
      <S.ActiveProjeto onClick={handleDrop}>
        <img src={dropActive ? up : down} alt="seta para menu" />
      </S.ActiveProjeto>
      {dropActive && (
        <S.Ul onClick={handleDrop}>
          {projetos.map(({ nome, id }: PropsProjeto) => (
            <S.Li key={id} onClick={() => handleProjeto(nome, id)}>
              <MM text={nome} />
            </S.Li>
          ))}
        </S.Ul>
      )}
    </S.Nav>
  )
}
