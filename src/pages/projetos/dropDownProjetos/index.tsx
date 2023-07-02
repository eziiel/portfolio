import React from 'react'
import * as S from './styled'
import projetos from '../../../api/dataProjetos.json'
import { MM } from '../../../assets/textCode/mm'
import down from '../../../../public/images/utils/down.svg'
import up from '../../../../public/images/utils/up.svg'
import { ContextRef } from '../../../context'

interface PropsProjeto {
  nome: string;
  id: number;
}

export const DropDownProjeto: React.FC = () => {
  const [dropActive, setDropActive] = React.useState(false)
  const { setProjetoId } = React.useContext(ContextRef)
  const html = document.documentElement

  html.addEventListener('click', (e: Event) => {
    const NavGuide = document.querySelector('#projetoGuide')
    const IngGuide = document.querySelector('#imgGuide')
    if (e.target !== NavGuide && e.target !== IngGuide) {
      setDropActive(false)
    }
  })
  const handleProjeto = (id: number): void => {
    setProjetoId(id)
  }

  const handleDrop = (): void => {
    setDropActive(!dropActive)
  }

  return (
    <S.Nav>
      <S.ActiveProjeto id="projetoGuide" onClick={handleDrop}>
        <img id="imgGuide" src={dropActive ? up : down} alt="seta para menu" />
      </S.ActiveProjeto>
      {dropActive && (
        <S.Ul onClick={handleDrop}>
          {projetos.map(({ nome, id }: PropsProjeto) => (
            <S.Li key={id} onClick={() => handleProjeto(id)}>
              <MM text={nome} />
            </S.Li>
          ))}
        </S.Ul>
      )}
    </S.Nav>
  )
}
