import React from 'react'
import * as S from './styled'
import { MM } from '../../assets/textCode/mm'
import { ContextRef } from '../../context'
import { DropMenu } from './dropMenu'

export const NavBar: React.FC = () => {
  const { component, setComponent } = React.useContext(ContextRef)
  const head = React.useRef<HTMLHeadElement>(null)
  const [dataImgs, setDataImgs] = React.useState([])
  const [dataImgsRedes, setDataImgsRedes] = React.useState([])

  React.useEffect(() => {
    fetch('api/images.json')
      .then((response) => response.json())
      .then((res) => setDataImgs(res))
  }, [])
  React.useEffect(() => {
    fetch('api/imagesRedes.json')
      .then((response) => response.json())
      .then((res) => setDataImgsRedes(res))
  }, [])

  const handleStatusMenu = (id: number): void => {
    setComponent(id)
  }

  return (
    <>
      <S.Header id="Nav" ref={head}>
        <S.Nav>
          <S.Ul>
            {dataImgs?.map(({ src, alt, text, id }) => (
              <S.Li
                key={alt}
                onClick={() => {
                  handleStatusMenu(id)
                }}
              >
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
            {dataImgsRedes.map(({ id, src, alt, link, text }) => (
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
      <DropMenu />
    </>
  )
}
