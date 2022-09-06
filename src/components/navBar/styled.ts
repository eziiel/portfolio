/* eslint-disable @typescript-eslint/no-unused-expressions */
import styled, { css } from "styled-components"

interface PropsImg {
  src: string;
  alt: string;
  status: boolean;
}

interface PropsTitle {
  status: boolean;
}

const Nav = styled.nav`
  font-family: "Major Mono Display", monospace;
  font-family: "JetBrains Mono", monospace;
  font-weight: bold;
  padding: 0 2rem;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1;
`
const Title = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 5rem;
  a {
    color: #333;
  }
`
const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
  align-items: stretch;
`

const Li = styled.li`
  color: green;
  position: relative;
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
      transform: translate3d(115px, 0, 0);
    `}
`

const SpanMenu =
  styled.span <
  PropsTitle >
  `
  color: #333;
  position: absolute;
  opacity: 0;
  transform: translate3d(-50px, 0, 0);
  transition: 0.5s ease-in;


  ${props =>
    props.status &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `}
`

const LinkForPage = styled.a`
  /* background: blue; */
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export { Nav, Ul, Li, Img, SpanMenu, LinkForPage, Title }
