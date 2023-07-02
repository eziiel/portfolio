import React from 'react'
import { MM } from '../textCode/mm'
import * as S from './styled'

interface PropsLinks {
  nome: string;
  link: string;
}

interface Props {
  id: number;
  nome: string;
  links: PropsLinks[];
  infoName: string;
  infoText: string;
  img: string;
  alt: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ProjetoCard = ({ links, infoName, infoText, img, alt }: Props) => {
  return (
    <S.ProjetosData anima={true}>
      <S.ImgProjeto src={img} alt={alt} />
      <S.InfoTextProjeto>
        <S.InfoText>{infoName}</S.InfoText>
        <S.InfoText>{infoText}</S.InfoText>
      </S.InfoTextProjeto>
      <S.LinksProjeto>
        {links.map(({ link, nome }) => (
          <S.LinkList key={nome}>
            <S.Link href={link} target="_blank">
              <MM text={nome} />
            </S.Link>
          </S.LinkList>
        ))}
      </S.LinksProjeto>
    </S.ProjetosData>
  )
}
