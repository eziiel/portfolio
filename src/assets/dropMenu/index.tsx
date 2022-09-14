import React from "react"
import * as S from "./styled"
import drop from "../datas/dropMenu.json"
import { MM } from "../textCode/mm"
import { ContextRef } from "../../context"

export const DropMenu: React.FC = () => {
  const [active, setActive] = React.useState(false)
  const { component, setComponent } = React.useContext(ContextRef)

  const handleDropMenu = (): void => {
    setActive(!active)
  }

  const handleIconActive = (id: number): void => {
    setComponent(id)
  }

  return (
    <S.Header onClick={handleDropMenu}>
      <S.ImgContent>
        <S.ImgActive src={drop[component].src} alt={drop[component].src} />
      </S.ImgContent>
      {active && (
        <S.Nav>
          <S.Ul>
            {drop.map(({ id, src, text, alt }) => (
              <S.Li key={id}>
                <S.LinkIcon
                  href={`#${text}`}
                  onClick={() => handleIconActive(id)}
                >
                  <S.ImgIcon src={src} alt={alt} />
                  {active && (
                    <S.NameIcon>
                      <MM text={text} />
                    </S.NameIcon>
                  )}
                </S.LinkIcon>
              </S.Li>
            ))}
          </S.Ul>
        </S.Nav>
      )}
    </S.Header>
  )
}