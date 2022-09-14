import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  border-bottom: 1px solid var(--orange);
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
`

const ImgActive = styled.img`
  width: 100%;
  height: 100%;
`

const Nav = styled.nav`
  width: 130px;
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
  height: 80px;
  margin: 0.5rem 0;
`

const LinkIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const NameIcon = styled.span`
  width: 100%;
  color: var(--orange);
  font-size: 0.7rem;
  text-align: center;
`

const ImgIcon = styled.img`
  width: 80%;
  padding: 1rem 2rem;
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
  ImgIcon
}
