import React from "react"
import * as S from "./styled"
// import Teste from "../../../public/images/teste.svg"
import Images from "../../assets/images.json"
import { MM } from "../../assets/mm"

export const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(Number)

  const handleStatusMenu = (id: number): void => {
    setMenuOpen(id)
  }
  return (
    <S.Nav>
      {/* <S.Title onClick={() => setMenuOpen(-1)}>
        <a href="#Início">
          <MM text="Portfólio" />
        </a>
      </S.Title> */}
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
    </S.Nav>
  )
}
