import React from "react"
import * as S from "./styled"
// import Teste from "../../../public/images/teste.svg"
import Images from "../../assets/datas/images.json"
import Redes from "../../assets/datas/imagesRedes.json"
import { MM } from "../../assets/textCode/mm"

export const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(Number)

  const handleStatusMenu = (id: number): void => {
    setMenuOpen(id)
  }
  return (
    <S.Nav>
      <S.Ul>
        {Images.map(({ src, alt, text, id }) => (
          <S.Li key={alt} onClick={() => handleStatusMenu(id)}>
            <S.LinkForPage href={`#${text}`}>
              <S.Img src={src} alt={alt} status={id === menuOpen}></S.Img>
              <S.SpanMenu status={id === menuOpen}>
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
  )
}
