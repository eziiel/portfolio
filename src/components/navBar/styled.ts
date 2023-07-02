/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import styled, { css } from 'styled-components'

interface PropsImg {
  src: string;
  alt: string;
  status: boolean;
}

interface PropsTitle {
  status: boolean;
}

const Header = styled.header`
  width: 11%;
  height: 100vh;
  position: fixed;

  background: linear-gradient(
    to right,
    #4a525a70,
    #4a525a20,
    #4a525a10,
    var(--light)
  );

  @media (max-width: 1260px) {
    display: none;
  }
  @media (max-width: 410px) {
    width: 100% !important;
  }
`

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  font-family: 'Major Mono Display', monospace;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
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

  ${(props) =>
    props.status === true &&
    css`
      transform: translate3d(100px, 0, 0);
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


  ${(props) =>
    props.status &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `}
`

const LinkForPage = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  @media (max-width: 1670px) {
    font-size: 0.875rem;
  }
`
const NavRedes = styled.ul`
  display: flex;
  gap: 0.5rem;
  place-content: center;
  width: 100%;
  height: 40%;

  @media (max-width: 1670px) {
    flex-wrap: wrap;
    align-content: start;
    gap: 2rem;
  }

  li {
    a {
      width: 100%;
      flex-direction: column;
      font-size: 0.8rem;
    }
  }
`

export { Header, Nav, Ul, Li, Img, SpanMenu, LinkForPage, NavRedes }
