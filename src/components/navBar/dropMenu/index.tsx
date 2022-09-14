import React from "react"
import * as S from "./styled"
import drop from "../../../assets/datas/dropMenu.json"
import { MM } from "../../../assets/textCode/mm"
import { ContextRef } from "../../../context"

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
                  {active && (
                    <S.NameIcon>
                      <MM text={text} />
                    </S.NameIcon>
                  )}
                  <S.IconList>
                    <S.ImgActive src={src} alt={alt} />
                  </S.IconList>
                </S.LinkIcon>
              </S.Li>
            ))}
          </S.Ul>
        </S.Nav>
      )}
    </S.Header>
  )
}
