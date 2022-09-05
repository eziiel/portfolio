import React from "react"
import * as S from "./styled"
// import Teste from "../../../public/images/teste.svg"
import Images from "../../assets/images.json"

export const NavBar: React.FC = () => {
  const [statusMenu, setStatusMenu] = React.useState(false)

  const handleStatusMenu = (): void => {
    setStatusMenu(!statusMenu)
  }
  return (
    <S.Nav>
      <h1>{`<Protifólio/>`}</h1>
      <S.Ul>
        {Images.map(({ src, alt, text }) => (
          <S.Li key={alt} onClick={handleStatusMenu}>
            {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
            <S.SpanMenu status={statusMenu}>{`<${text} />`} </S.SpanMenu>
            <S.Img src={src} alt={alt} status={statusMenu} />
          </S.Li>
        ))}
      </S.Ul>
    </S.Nav>
  )
}
