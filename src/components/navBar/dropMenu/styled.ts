import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  width: 200px;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
  z-index: 2;
  display: none;

  @media (max-width: 1260px) {
    display: flex;
  }
`

const ImgContent = styled.div`
  background: var(--dark-blue);
  width: 100%;
  height: 100px;
  display: flex;
  place-content: center;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid var(--orange);
  border-right: 1px solid var(--orange);
  z-index: 3;
`

const ImgActive = styled.img`
  width: 100%;
  height: 100%;
`

const Nav = styled.nav`
  width: 200px;
  border-bottom: 1px solid var(--orange);
  border-right: 1px solid var(--orange);
  border-top: 1px solid var(--orange);
`

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  background: black;
  padding: 0.5rem;
`

const Li = styled.li`
  width: 100%;
  margin: 0.5rem 0;
`

const LinkIcon = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`

const NameIcon = styled.span`
  width: 100%;
  color: var(--orange);
  font-size: 0.7rem;
  text-align: center;
`

const IconList = styled.div`
  display: block;
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    background-size: 80%;
  }
`

export {
  Header,
  ImgContent,
  ImgActive,
  Nav,
  Ul,
  Li,
  LinkIcon,
  NameIcon,
  IconList
}
