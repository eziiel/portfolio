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
  width: 11%;
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
  gap: 6rem;
  background: linear-gradient(
    to right,
    #4a525a50,
    #4a525a20,
    #4a525a10,
    var(--light)
  );
`
const Title = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  /* margin-bottom: 8rem; */
  a {
    color: #333;
    font: var(--title2);
  }
`
const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: center;
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
  transition: 0.5s ease-in;

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
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
const NavRedes = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-self: start;
  height: 40%;
  li {
    padding: 1rem;
  }
`

export { Nav, Ul, Li, Img, SpanMenu, LinkForPage, Title, NavRedes }
