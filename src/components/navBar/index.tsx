import React from "react"
import * as S from "./styled"
// import Teste from "../../../public/images/teste.svg"
import Images from "../../assets/images.json"

export const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(Number)

  const handleStatusMenu = (id: number): void => {
    setMenuOpen(id)
  }
  return (
    <S.Nav>
      <h1 onClick={() => setMenuOpen(-1)}>{`<Protifólio/>`}</h1>
      <S.Ul>
        {Images.map(({ src, alt, text, id }) => (
          <S.Li key={alt} onClick={() => handleStatusMenu(id)}>
            <S.LinkForPage>
              <S.Img src={src} alt={alt} status={id === menuOpen}></S.Img>
              <S.SpanMenu status={id === menuOpen}>{text}</S.SpanMenu>
            </S.LinkForPage>
          </S.Li>
        ))}
      </S.Ul>
    </S.Nav>
  )
}
