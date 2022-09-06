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
      <S.Title onClick={() => setMenuOpen(0)}>
        <a href="#inicio">{`<Portifólio />`}</a>
      </S.Title>
      <S.Ul>
        {Images.map(({ src, alt, text, id }) => (
          <S.Li key={alt} onClick={() => handleStatusMenu(id)}>
            <S.LinkForPage href={`#${text}`}>
              <S.Img src={src} alt={alt} status={id === menuOpen}></S.Img>
              <S.SpanMenu status={id === menuOpen}>{`<${text} />`}</S.SpanMenu>
            </S.LinkForPage>
          </S.Li>
        ))}
      </S.Ul>
    </S.Nav>
  )
}
