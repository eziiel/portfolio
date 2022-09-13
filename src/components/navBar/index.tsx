import React from "react"
import * as S from "./styled"
import Images from "../../assets/datas/images.json"
import Redes from "../../assets/datas/imagesRedes.json"
import { MM } from "../../assets/textCode/mm"
import { ContextRef } from "../../context"

export const NavBar: React.FC = () => {
  const { component, setComponent } = React.useContext(ContextRef)
  const head = React.useRef<HTMLHeadElement>(null)

  const handleStatusMenu = (id: number): void => {
    setComponent(id)
  }

  return (
    <S.Header id="Nav" ref={head}>
      <S.Nav>
        <S.Ul>
          {Images.map(({ src, alt, text, id }) => (
            <S.Li key={alt} onClick={() => handleStatusMenu(id)}>
              <S.LinkForPage href={`#${text}`}>
                <S.Img src={src} alt={alt} status={id === component}></S.Img>
                <S.SpanMenu status={id === component}>
                  <MM text={text} />
                </S.SpanMenu>
              </S.LinkForPage>
            </S.Li>
          ))}
        </S.Ul>
        <S.NavRedes>
          {Redes.map(({ id, src, alt, link, text }) => (
            <li key={id}>
              <S.LinkForPage href={link} target="_blank">
                <S.Img src={src} alt={alt} />
                <MM text={text} />
              </S.LinkForPage>
            </li>
          ))}
        </S.NavRedes>
      </S.Nav>
    </S.Header>
  )
}
