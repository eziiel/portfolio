/* eslint-disable @typescript-eslint/no-unused-expressions */
import styled, { css } from "styled-components"

interface PropsImg {
  src: string;
  alt: string;
  status?: boolean;
}

interface PropsTitle {
  status?: boolean;
}

const Nav = styled.nav`
  background: red;
  width: 10%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
  align-items: stretch;
`

const Li = styled.li`
  color: green;
  display: flex;
  gap: 1rem;
  position: relative;
  align-items: center;
  justify-content: center;
`

const Img = styled.img.attrs(({ alt, src, status }: PropsImg) => {
  alt
  src
})`
  width: 40px;
  transition: 0.4s ease-in;

  ${props =>
    props.status === true &&
    css`
      transform: translate3d(100px, 0, 0);
    `}
`

const SpanMenu =
  styled.span <
  PropsTitle >
  `
  color: #333;
  position: absolute;
  opacity: 0;
  transform: translate3d(-40px, 0, 0);
  transition: 0.5s ease-in;


  ${props =>
    props.status === true &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `}
`

const LinkForPage = styled.a``

export { Nav, Ul, Li, Img, SpanMenu, LinkForPage }
